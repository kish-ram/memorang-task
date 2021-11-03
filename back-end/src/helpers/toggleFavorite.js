const addFavorite = require('../utils/dynamo/addFavorite');
const getItem = require('../utils/dynamo/getItem');

module.exports = async ({userId, movieId, title}) => {
    const params = {
        Key: { userId, movieId },
    }
    try {
        let resp = await getItem(params, process.env.TBL_NAME);
        console.log(resp);
        const data = {
            userId, 
            movieId,
            title,
            status: true
        }
        if(resp) {
            data.status = !resp.status;
        }
        console.log('updatedData');
        console.log(data);
        resp = await addFavorite(data);
        console.log(resp);
        return data;

    } catch (error) {
        console.error(error);
        return false;
    }
}