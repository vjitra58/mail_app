require('dotenv').config()
const nodemailer = require('nodemailer');
const PASSWORD = "uuwglgbwqikvzjnx"; //this is the password for vikky@gmail.com

export default function handler(req, res) {
  console.log(req.body);
    const mailData = {
    from: 'vikky58616@gmail.com',
    to: 'vikaskumar58616@gmail.com',
    subject: `${req.body.subject}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }

   const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'vikky58616@gmail.com',
      pass: PASSWORD,
    },
    secure: true,
  })

  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
}
