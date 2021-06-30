let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
//var mongoose = require('mongoose');
let index = require('../index');


describe('Podcast',()=>{
    describe('/USE createDetails',()=>{
        it('it should get all the podcast',(done)=>{
            chai.request(index).use('/createDetails').end((err,res)=>{
                (res).should.have.status(200);
                (res.body).should.be.a('object');
                (res.body.podcast.length).should.be.eql(1);
                done();
            });
        });
    });

    
});