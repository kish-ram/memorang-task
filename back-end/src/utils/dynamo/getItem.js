const { GetItemCommand } = require("@aws-sdk/client-dynamodb");
const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");
const dynamoClient = require("./dynamodb");

const getItem = async (additionalParams, tableName = process.env.FAV_TBL_NAME) => {
  const params = {
    TableName: tableName,
    ...additionalParams,
    Key: marshall(additionalParams.Key),
  };
  const dbData = await dynamoClient().send(new GetItemCommand(params));
  if (dbData.Item) {
    return unmarshall(dbData.Item);
    // return userId;
  }
  return false;
};

module.exports = getItem;
