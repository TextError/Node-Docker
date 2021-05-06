const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');

exports.signUp = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const hashPass = await bcrypt.hash(password, 12);
    const user = await User.create({ username, password: hashPass });
    req.status(201).json({
      status: 'success',
      body: { user }
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({ 
      status: 'fail'
     })
  }
};

exports.login = async( req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if(!user) return res.statu(404).json({ status: 'fail', message: 'User not Found!' });
    const isCorrect = await bcrypt.compare(password, user.password)
    if(isCorrect) return res.status(200).json({ status: 'success' });
    res.status(400).json({ status: 'fail', message: 'Incoret username or password!' })
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 'fail'
    });
  }
};