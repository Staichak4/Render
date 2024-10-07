const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  }
  
  const signup = async (req, res) => {
    const { nome, senha } = req.body;
    
    const existingUser = await User.findOne({ nome });
    if (existingUser) {
        return res.status(400).json({ message: 'Usuário já existe.' });
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ nome, senha: hashedPassword });
    await user.save();
    
    res.status(201).json({ message: 'Usuário criado com sucesso!'});
  };
  
  const login = async(req, res) => {
    const {nome, senha} = req.body;
  
    const user = await User.findOne({nome});
    if(!user) {
      return res.status(400).json({message:'Usuário  ou senha inválidos.'});
    }
  
    const isMatch = await bcrypt.compare(senha, user.senha);
    if (!isMatch) {
      return res.status(400).json({message:'Usuário  ou senha inválidos.'});
    }
  
    const token = generateToken(user);
    res.status(200).json({token}); 
  };

  module.exports = {
    signup,
    login
  }