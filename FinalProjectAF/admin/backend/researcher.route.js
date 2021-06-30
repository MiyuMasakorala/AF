const express = require('express');
const researchRoute = express.Router();
const bcrytpt = require('bcryptjs')

const uploadController = require("./fileUpload");

let Researcher = require('./researcher.model');


researchRoute.route('/add').post(function (req,res){
    let researcher = new Researcher(req.body);
    researcher.save()
        .then(employee => {
            res.status(200).json({'research' : 'research is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

researchRoute.route('/').get(function (req, res){

    Researcher.find(function (err,researcher){
        if(err)
            console.log(err);
        else{
            res.json(researcher);
        }
    });
});

researchRoute.route('/edit/:id').get(function (req,res){
    let id = req.params.id;
    Researcher.findById(id, function (err,researcher){
        res.json(researcher);
    });
});

researchRoute.route('/update/:id').post(function (req,res){
    let id = req.params.id;
    Researcher.findById(id, function (err, researcher){
        if(!researcher)
            res.status(404).send("Data is not found??");
        else{

            researcher.name = req.body.name;
            researcher.phone = req.body.phone;
            researcher.date = req.body.date;
            researcher.email = req.body.email;
            researcher.password = req.body.password;
            researcher.cpassword = req.body.cpassword;


            researcher.save().then(researcher => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

researchRoute.post('/file-upload',uploadController.upload);

researchRoute.route('/delete/:id').get(function(req,res){
    Researcher.findByIdAndRemove({_id:req.params.id}, function (err, researcher){
        if(err)res.json(err);

        else res.json('Removed Successfully');
    });
});




module.exports = researchRoute;