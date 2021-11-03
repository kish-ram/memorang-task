const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');

const dynamoClient = () => {
  let options = {};
  // if (process.env.IS_OFFLINE) {
  //   options = {
  //     region: 'us-east-1',
  //     endpoint: 'http://localhost:8000',
  //   };
  // } else {
    options.region = process.env.REGION;
  // }

  const dbClient = new DynamoDBClient(options);
  return dbClient;
};

module.exports = dynamoClient;

