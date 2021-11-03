const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  };
  
  module.exports = (statusCode, respBody, respHeaders = {}) => ({
    statusCode,
    headers: { ...headers, ...respHeaders },
    body: JSON.stringify(respBody),
  });
  