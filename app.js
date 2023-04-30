const PORT = 8080; // 8000 for local
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors())

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