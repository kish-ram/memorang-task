const { QueryCommand } = require("@aws-sdk/client-dynamodb");
const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");
const dynamoClient = require("./dynamodb");

const getFavorites = async (userId, tableName = process.env.FAV_TBL_NAME) => {
  const params = {
    KeyConditionExpression: "userId = :userId",
    FilterExpression: '#status = :status',
    ExpressionAttributeNames: { '#status': 'status', },
    ExpressionAttributeValues: marshall({ ":userId": userId, ":status": true }),
    IndexName: "userId-index",
    TableName: tableName,
  };
  console.log(params);
  const dbData = await dynamoClient().send(new QueryCommand(params));
  console.log('dbData');
  console.log(dbData);
  if (dbData.Count > 0) {
    const unmarshalledList = dbData.Items.map((item, _ind) =>
        unmarshall(item)
    );
    return unmarshalledList;
    // return unmarshall(dbData.Items);
    // return userId;
  }
  return false;
};

module.exports = getFavorites;
