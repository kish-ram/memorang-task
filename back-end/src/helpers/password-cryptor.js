const bcrypt = require('bcryptjs');

module.exports = () => ({
  async genHash(password) {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(5, (err_, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            reject(err);
          } else {
            resolve(hash);
          }
        });
      });
    });
  },

  async doesMatch(password, hash) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, hash, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

});
