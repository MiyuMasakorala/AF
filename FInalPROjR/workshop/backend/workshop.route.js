const express = require('express');
const workshopRoutes = express.Router();
const bcrytpt = require('bcryptjs')

const uploadController = require("./fileUpload");

let Workshop = require('./workshop.model');
//let Conference = require('./event.model');

workshopRoutes.route('/add').post(function (req,res){
    let workshop = new Workshop(req.body);
    workshop.save()
        .then(employee => {
            res.status(200).json({'business' : 'business is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

workshopRoutes.route('/').get(function (req, res){

    Workshop.find(function (err,workshop){
        if(err)
            console.log(err);
        else{
            res.json(workshop);
        }
    });
});

workshopRoutes.route('/edit/:id').get(function (req,res){
    let id = req.params.id;
    Workshop.findById(id, function (err,workshop){
        res.json(workshop);
    });
});

workshopRoutes.route('/update/:id').post(function (req,res){
    let id = req.params.id;
    Workshop.findById(id, function (err, workshop){
        if(!workshop)
            res.status(404).send("Data is not found??");
        else{
            workshop.first_name = req.body.first_name;
            workshop.last_name = req.body.last_name;
            workshop.phone = req.body.phone;
            workshop.email = req.body.email;
            workshop.password = req.body.password;
            workshop.cpassword = req.body.cpassword;


            workshop.save().then(employee => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

workshopRoutes.route('/login').post(function (req,res){
	console.log(req.body.email);
    Workshop.find({"email": req.body.email,"password":req.body.password}, (err, workshop) => {
        if (err) {
            res.send(err);
        }
		//else{
		//console.log(workshop.password);
		//if(workshop.password == req.body.email)
			[workshop1] = workshop;
			res.json(workshop1);
		//else
		//	res.send("incorrect password")
		//}
    });
});

workshopRoutes.route('/approve/:id').get(function (req,res){
    let id = req.params.id;
	console.log(id);
	Workshop.findOneAndUpdate({ _id: id}, {$set:{"status":"approved"}}, (err, workshop) => {
        if (err) {
            res.send(err);
        }
        res.json('Approved');
    });
});

workshopRoutes.route('/decline/:id').get(function (req,res){
    let id = req.params.id;
	Workshop.findOneAndUpdate({ _id: id}, {$set:{"status":"declined"}}, (err, workshop) => {
        if (err) {
            res.send(err);
        }
        res.json('Approved');
    });
});

workshopRoutes.post('/file-upload',uploadController.upload);

workshopRoutes.get('/file-download/:filename',uploadController.download);


workshopRoutes.route('/delete/:id').get(function(req,res){
    Workshop.findByIdAndRemove({_id:req.params.id}, function (err, workshop){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});

/* workshopRoutes.route('/conference').get(function (req, res){

    Conference.find(function (err,event){
        if(err)
            console.log(err);
        else{
            res.json(event);
        }
    });
});

workshopRoutes.route('/approve/:id').post(function (req,res){

    let id = req.params.id;
    Conference.findById(id, function (err, event){
        if(!event)
            res.status(404).send("Data is not found??");
        else{
            event.conf_status = "Approved";

            event.save().then(employee => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

workshopRoutes.route('/reject/:id').post(function (req,res){

    let id = req.params.id;
    Conference.findById(id, function (err, event){
        if(!event)
            res.status(404).send("Data is not found??");
        else{
            event.conf_status = "Reject";

            event.save().then(employee => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
}); */

module.exports = workshopRoutes;