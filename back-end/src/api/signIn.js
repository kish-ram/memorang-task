const respond = require('../helpers/response');
const passwordCryptor = require('../helpers/password-cryptor');
const getItem = require('../utils/dynamo/getItem');

module.exports.signIn = async (event, context) => {
    try {
      const payload = JSON.parse(event.body);
      console.log(payload);
      const {email, password} = payload;
      let dbResp = await getItem({Key:{email}}, process.env.USER_TBL);
      if(!dbResp){
        return (respond(400, { message: 'Error getting the user. user doesn\'t exists' }));
      }
      let userData = {...dbResp};
      let { passwordHash } = userData;

      let doesPasswordMatch = false;
      doesPasswordMatch = await passwordCryptor().doesMatch( password, passwordHash);

        if (!doesPasswordMatch) {
            return (respond(401, { message: 'Invalid password. Password doesn\'t match' }));
        }
        //TODO JWT
      return (respond(200, { data: {email} }))
    } catch (err) {
      console.error(err);
      return respond(500, { message: 'System error' });
    }
  };
  