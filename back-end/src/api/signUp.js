const respond = require('../helpers/response');
const passwordCryptor = require('../helpers/password-cryptor');
const getItem = require('../utils/dynamo/getItem');
const addUser = require('../utils/dynamo/addUser');

module.exports.signUp = async (event, context) => {
    try {
      const payload = JSON.parse(event.body);
      console.log(payload);
      const {email, password} = payload;
      let dbResp = await getItem({Key:{email}}, process.env.USER_TBL);
      if(dbResp){
        return (respond(400, { message: 'user already exists. Try logging in' }));
      }
      //TODO generate UID for users
      let userData={
        email,
      };
      const passwordHash = await passwordCryptor().genHash(password);
      userData.passwordHash = passwordHash;
      let resp = await addUser(userData);
      console.log(resp);
      if(resp) {
          //TODO JWT
        return (respond(200, { data: {email, userId:resp.userId} }))
      }
      throw Error('Error signing up!');
    } catch (err) {
      console.error(err);
      return respond(500, { message: 'System error' });
    }
  };
  