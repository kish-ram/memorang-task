const getItem = require('../utils/dynamo/getItem');

module.exports = async ({userId, movieId}) => {
    const params = {
        Key: { userId, movieId },
    }
    try {
        let resp = await getItem(params, process.env.TBL_NAME);
        console.log(resp);
        if(resp) {
            return resp;
        }
        return {
            userId,
            movieId,
            status:false
        };

    } catch (error) {
        console.error(error);
        return false;
    }
}