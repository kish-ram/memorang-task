const getFavorites = require('../utils/dynamo/getFavorites');

module.exports = async (userId) => {
    let resp = await getFavorites(userId, process.env.FAV_TBL_NAME);
    console.log(resp);
    if(resp) {
        return resp;
    }
    return [];
}