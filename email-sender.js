var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tdiallo0@gmail.com',
    pass: 'ramatoulaye92'
  }
});

var mailOptions = {
  from: 'tdiallo0@gmail.com',
  to: 'konvict2@live.fr',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

