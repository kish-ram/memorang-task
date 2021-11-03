const getItem = require('../utils/dynamo/getItem');

module.exports = async (userId, movieId) => {
    const params = {
        Key: { userId, movieId },
        FilterExpression: { status: true}
    }
    console.log(params)
    let resp = await getItem(params, process.env.TBL_NAME);
    console.log(resp);
}