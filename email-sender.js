var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tdiallo0@gmail.com',
    pass: 'impossible2017'
  }
});

var mailOptions = {
  from: 'tdiallo0@gmail.com',
  to: 'konvict2@live.fr',
  subject: 'Send Message',
  text: 'Envoi de message avec Node js'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email envoyé avec succés ' + info.response);
  }
});

