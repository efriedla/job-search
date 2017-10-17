var express = require('express');
var mongoose = require('mongoose');
var Job = require('../models/job');
var router = express.Router();




/* GET animals listing. */
router.get('/', function(req, res, next) {
    Job.create({
      title: 'Juntior Dev',
      companyName: 'Microsoft',
      location: 'Seattle'
    }, function(err,job){
      if(err) return console.log(err);
      res.send(job);
        
    })
  res.send(dev);
  console.log('in the /jobs route');
  Job.find({}, function(err, jobs) {
      if(err)return console.log(err);
      res.send(jobs);
  });
 });

module.exports = router;
