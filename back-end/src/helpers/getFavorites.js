const getItem = require('../utils/dynamo/getItem');

module.exports = async (userId) => {
    const params = {
        Key: { userId },
        FilterExpression: { status: true}
    }
    console.log(params)
    let resp = await getItem(params, process.env.TBL_NAME);
    console.log(resp);
}