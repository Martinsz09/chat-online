const express = require('express');
const users = require('../models/users');
const Message = require('../models/message');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {title: 'Chat Online'});
});

router.post('/chat', async (req, res) => {
  const name = req.body.name;
  const messageText = req.body.message;

  const saveUsers = new users({ name });
  const newMessage = new Message({ name, message: messageText });
  
  try {
    await saveUsers.save();
    await newMessage.save();


    const messageCount = await Message.countDocuments();

      if (messageCount >= 100) {
      await Message.deleteMany({});  
    }
    const messages = await Message.find().sort({ createdAt: 1 });


    res.render('chat', {
      title: 'Chat Online',
      name,
      messages 
    });

  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
});



module.exports = router;
