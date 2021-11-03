const { PutItemCommand } = require("@aws-sdk/client-dynamodb");
const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");
const dynamoClient = require("./dynamodb");

const addFavorite = async (data) => {
  const params = {
    TableName: process.env.TBL_NAME,
    Item: marshall(data),
  };
  return await dynamoClient().send(new PutItemCommand(params));
};

module.exports = addFavorite;
