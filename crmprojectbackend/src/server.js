require('dotenv').config();
const express = require('express');
const leadRoutes = require('./routes/leadsRoutes');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.json());
app.use(cors());

app.use('/api', leadRoutes); // api is the base 

app.post('/send-emails', (req, res) => {
  const { subject, body } = req.body;
  
  MongoClient.connect("mongodb+srv://rizwan:rizwan123@cluster0.em5bh.mongodb.net/scrapHub_db?retryWrites=true&w=majority", (err, client) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      const db = client.db(process.env.MONGODB_DBNAME);
      db.collection('leads').find().toArray((err, leads) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: 'Internal server error' });
        } else {
          const emails = leads.map(lead => lead.email).flat();
          if (emails && emails.length > 0) {
            // send emails using nodemailer
            const transporter = nodemailer.createTransport({
              host: 'smtp.gmail.com',
              port:587,
              auth: {
                user: 'f190994@nu.edu.pk',
                pass: 'RR@7668384'
              }
            });

            for (let i = 0; i < emails.length; i++) {
              const mailOptions = {
                from: 'f190994@nu.edu.pk',
                to: emails[i],
                subject,
                text: body
              };

              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
            }

            res.status(200).json({ message: 'Emails sent successfully' });
          } else {
            res.status(404).json({ message: 'No data available' });
          }
        }
      });
    }
  });
});

const port = process.env.EXPRESS_PORT || 4000;

app.listen(port, () => {
    console.log("Server is listening on port " + port);
});