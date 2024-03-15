const path = require('path');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.resolve(__dirname, "../build")))
app.use(cors());
app.use(bodyParser.json()); 

app.get('/api', (req, res) => {
  res.json({ message: 'server works' });
});

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

app.post("/api/contact", bodyParser.urlencoded({extended:false}), (req, res) => {
  const name =req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: process.env.EMAIL_ADDRESS,
    subject: "Contact",
    html:`<p>Email: ${email}</p>
    <p>Name: ${name}</p>
    <p>Message: ${message}</p>`
  }

  contactEmail.sendMail(mail, (error)=>{
    if(error) {
      res.json(error)
    }
    else{
      res.json({code:200, status:"Sent"})
    }
  })
})

app.get("*", (req, res)=> {
  res.sendFile(path.resolve(__dirname, "../build", "index.html"))
})

app.listen(PORT, () => {
  console.log(`Server online on port ${PORT}`);
});