process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0
const PORT = process.env.PORT || 8080;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser')

require('dotenv').config();

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res) =>{
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send("<h1>Hi</h1>")
})


app.post('/email', (req, res) =>{
    async function main() {
        let data = req.body;
        console.log(data);
        let transporter = nodemailer.createTransport({
            host: "smtp.mail.ru", 
            port: 465, 
            secure: true, 
            auth: {
              user: "veronika.martinkova@mail.ru", 
              pass: process.env.REACT_APP_MAIL_PASS, 
            },
        });
          
        let info = await transporter.sendMail({
            from: `BAR Studio web mail <veronika.martinkova@mail.ru>`,
            to: "veronika.martinkova@mail.ru",
            subject: `${data.subject}`,
            text: `
            Email пользователя: ${data.email}
            Телефон для связи: ${data.tel}
            Текст: ${data.text}`
          });
        
          console.log(info.messageId);
        }
        
        main().catch(err => res.status(400).send({ error: 'Something failed!' }));
})

app.get('/service', (req, res) =>{
    axios.get('https://api.yclients.com/api/v1/services/325582', {
        headers: {
        'authorization': process.env.REACT_APP_YCLIENT_API_KEY,
        'Accept': "application/vnd.api.v2+json",
        "Accept-Encoding": "gzip,deflate,compress"
        }
    })
    .then(function(response) {
        // console.log(response.data.data);
        res.json(response.data.data);
    })
    .catch(function(error) {
        console.log(error)
    });
})


app.get('/team', (req, res) =>{

    axios.get('https://api.yclients.com/api/v1/staff/325582', {
        headers: {
        'authorization': process.env.REACT_APP_YCLIENT_API_KEY,
        'Accept': "application/vnd.api.v2+json",
        "Accept-Encoding": "gzip,deflate,compress"
        }
    })
    .then(function(response) {
        // console.log(response.data.data);
        res.json(response.data.data);
    })
    .catch(function(error) {
        console.log(error)
    });
})



app.get('/category', (req, res) =>{

    axios.get('https://api.yclients.com/api/v1/service_categories/325582', {
        headers: {
        'authorization': process.env.REACT_APP_YCLIENT_API_KEY,
        'Accept': "application/vnd.api.v2+json",
        "Accept-Encoding": "gzip,deflate,compress"
        }
    })
    .then(function(response) {
        // console.log(response.data.data);
        res.json(response.data.data);
    })
    .catch(function(error) {
        console.log(error)
    });
})

app.get('/news', (req, res) => {
    axios.get(`https://graph.instagram.com/me/media?fields=${process.env.REACT_APP_INSTAGRAM_FIELDS}&access_token=${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}&limit=15`, {
        headers: {'Accept-Encoding': 'gzip,deflate,compress'}
    }
    )
    .then(function(response) {
        // console.log(response.data.data);
        res.json(response.data.data);
    })
    .catch(function(error) {
        console.log(error)
    });
})


app.listen(PORT, () => {
    console.log(`Backend is running on ${PORT}`);
})