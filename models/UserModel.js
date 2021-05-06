const mongose = require('mongoose');

const UserSchema = new mongose.Schema({
  username: {
    type: string,
    required: [true, 'User must have a username'],
    unique: true
  },
  password: {
    type: string,
    required: [true, 'User must have a password']
  }
});

module.exports = User = mongose.model('user', UserSchema);