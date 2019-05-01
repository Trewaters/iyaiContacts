var express = require('express');
var cntRouter = express.Router();

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/testDB").then(
  () => { console.log('Database is connected') },
  err => { console.log('Unable to connect to the database...' + err) }
);

const mdContact = require('../models/Contact');

/* GET contacts */
cntRouter.get('/', function (req, res, next) {
});

/* POST - new contact */
cntRouter.route('/addCnt').post(function (req, res) {
  const contact = new mdContact(req.body);
  contact.save()
    .then(item => {
      res.status(200).json({ 'contact': 'Contact added to database...' });
    })
    .catch(err => {
      res.status(400).send("Unable to save contact to MongoDB!");
    });
});

cntRouter.route('/getCnts').get(function (req, res) {
  mdContact.find(function (err, contacts) {
    if (err) {
      console.log(err);
    } else {
      res.json(contacts);
    }
  })
})

cntRouter.route('/searchCnts/:id').get(function (req, res) {
  let id = req.params.id;

  // console.log('req.params.id...', req.params.id);

  mdContact.find({ nmFull: id }, function (err, contacts) {

    // console.log('searchCnts...', contacts);

    res.json(contacts); // returns and array of objects [{DOCUMENT}]
  });
})

cntRouter.route('/editCnt/:id').post(function (req, res) {

  // console.log("req.body...",req.body);
  // console.log("req.params.id...",req.params.id);

  mdContact.update({ nmFull: req.body.nmFull }, req.body).then( item => {
    res.status(200).json({"contact": "Contact "+ req.params.id +" was updated successfully..."})
  })
    .catch(err => {
      res.status(400).send("unable to update the database!")
    })
  // console.log("update done...");
});

cntRouter.route('/deleteCnt/:id').get(function(req,res){
  // define vId
  let vId = req.params.id;
  // vId must be the MongoDB object ID and not the full name like I have been using.

  mdContact.findByIdAndRemove({'_id': vId},function(err,contacts){
    if(err) res.json(err);
    else res.json("Successfully removed contact")
  })
});

module.exports = cntRouter;
