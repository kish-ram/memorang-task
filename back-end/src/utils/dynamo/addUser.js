const { PutItemCommand } = require("@aws-sdk/client-dynamodb");
const { marshall } = require("@aws-sdk/util-dynamodb");
const dynamoClient = require("./dynamodb");

const addUser = async (data) => {
  const params = {
    TableName: process.env.USER_TBL,
    Item: marshall(data),
  };
  return await dynamoClient().send(new PutItemCommand(params));
};

module.exports = addUser;
