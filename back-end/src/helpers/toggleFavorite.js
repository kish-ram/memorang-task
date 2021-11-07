const addFavorite = require('../utils/dynamo/addFavorite');
const getItem = require('../utils/dynamo/getItem');

module.exports = async ({userId, movieId, title}) => {
    const params = {
        Key: { userId, movieId },
    }
    try {
        let resp = await getItem(params, process.env.FAV_TBL_NAME);
        console.log('resp');
        console.log(resp);
        let data = {
            userId, 
            movieId,
            title,
        }
        if(resp===false){
            data.status = false;
        } else {
            data.status = resp.status === false ? true : false;
        }
        await addFavorite(data);
        console.log('data');
        console.log(data);
        return data;

    } catch (error) {
        console.error(error);
        return false;
    }
}