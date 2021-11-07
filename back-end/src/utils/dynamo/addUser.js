const { PutItemCommand } = require("@aws-sdk/client-dynamodb");
const { marshall } = require("@aws-sdk/util-dynamodb");
const dynamoClient = require("./dynamodb");
const { customAlphabet } = require('nanoid');
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

const addUser = async (data) => {
  const nanoid = customAlphabet(alphabet, 10);
  const userId = nanoid();
  data.userId = userId;
  const params = {
    TableName: process.env.USER_TBL,
    Item: marshall(data),
  };
  await dynamoClient().send(new PutItemCommand(params));
  return data;
};

module.exports = addUser;
