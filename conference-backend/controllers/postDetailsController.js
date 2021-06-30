
const express = require('express');
var ObjectId = require('mongoose').Types.ObjectId;
var router = express.Router();

var { PostDetails } = require('../models/details');

router.get('/',(req,res)=> {
    PostDetails.find((err,docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            console.log('Error while retrieving all records: ',JSON.stringify(err,undefined,2))
        }
    })
})

router.post('/',(req,res)=>{
    var newRecord = new PostDetails ({
          title:req.body.title,
          description: req.body.description,
          date : req.body.date,
          venue : req.body.venue
    })

    newRecord.save((err, docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            console.log('Error while creating new record: ',JSON.stringify(err,undefined,2))
        }
    })
})

router.put('/:id',(req,res)=>{
  if(!ObjectId.isValid(req.params.id))
  return res.status(400).send('No record in given ID'+req.params.id);

  var updatedRecord = {
    title:req.body.title,
    description : req.body.description,
    date : req.body.date,
    venue : req.body.venue
  }

PostDetails.findByIdAndUpdate(req.params.id,{ $set:updatedRecord },{new:true},(err, docs)=>{
    if(!err){
        res.send(docs)
    }
    else{
        console.log('Error while updating new record: ',JSON.stringify(err,undefined,2))
    }
    })
})

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record in given ID'+req.params.id);

    PostDetails.findByIdAndRemove(req.params.id,(err, docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            console.log('Error while deleting new record: ',JSON.stringify(err,undefined,2))
        }
        })

})

module.exports = router