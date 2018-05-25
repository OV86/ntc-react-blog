const path = require('path');
const express = require('express');
const http = require('http');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// ping app in every 10 minutes (600000) to prevent Heroku sleeping
// setInterval(() => {
//   http.get('https://ov86-ntc-proxy-api.herokuapp.com/');
//   http.get('https://ov86-ntc-react-blog.herokuapp.com/');
// }, 600000);

// match all unmatched routes as routing is handled by react-router
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is running');
});
