const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const dotenv = require('dotenv');
dotenv.config();

const contactRouter = require('./routes/contact');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // changed from false in attempt to make server accepts "multipart/formdata"
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist/basic')));
/**
 * serving compodoc rendered documentation when server is online.
*/
app.use('/docs', express.static(__dirname + '/documentation'));

app.use('/contact', contactRouter);

const port = process.env.PORT || 4200;
const host = process.env.HOST || 'localhost';

const server = app.listen({ port, host }, function () {
  console.log("iyai+ contact app listening at \nport...", port, "\nip address...", server.address().address);
})

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(() => {
      server.close();
      server.listen(PORT, HOST);
    }, 1000);
  }
});

module.exports = app;
