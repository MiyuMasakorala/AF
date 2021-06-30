import  React, {Component} from 'react';
import axios from 'axios';
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Link} from "react-router-dom";


export default  class EditEmployee extends  Component{


    constructor(props){
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeCPassword = this.onChangeCPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name:'',
            last_name: '',
            phone:'',
            email:'',
            password:'',
            cpassword:''
        }
    }

    componentDidMount() {
        alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/workshop/edit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    first_name: res.data.first_name,
                    last_name: res.data.last_name,
                    phone: res.data.phone,
                    email: res.data.email,
                    password: res.data.password,
                    cpassword: res.data.cpassword
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

    onChangeFirstName(e){
        this.setState({
            first_name: e.target.value
        });
    }
    onChangeLastName(e){
        this.setState({
            last_name: e.target.value
        });
    }
    onChangePhone(e){
        this.setState({
            phone: e.target.value
        });
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }
    onChangeCPassword(e){
        this.setState({
            cpassword: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        let Email = this.state.email;
        const obj ={
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password,
            cpassword: this.state.cpassword,
        };

        console.log('Update id '+this.props.match.params.id)
        axios.post('http://localhost:4000/workshop/update/'+this.props.match.params.id,obj)
            .then(res => console.log(res.data));
        this.props.history.push('/EmpView');
    }

    render() {
        return(
            <Router>
                <div className="container" style={{marginTop:10}}>
                    <h3 className="text-center">Edit Employee Bios</h3>
                    <form onSubmit={this.onSubmit} className="form-control-plaintext">
                        <div className="form-group">
                            <label>First Name:</label>
                            <input type ="text" className="form-control"  value={this.state.first_name} onChange = {this.onChangeFirstName}/>
                        </div>
                        <div className="form-group">
                            <label>Last Name :</label>
                            <input type ="text" className="form-control"  value={this.state.last_name} onChange = {this.onChangeLastName}/>
                        </div>
                        <div className="form-group">
                            <label>Phone Number :</label>
                            <input type ="text" className="form-control" value={this.state.phone} onChange = {this.onChangePhone}/>
                        </div>
                        <div className="form-group">
                            <label>email Address :</label>
                            <input type ="text" className="form-control" value={this.state.email} onChange = {this.onChangeEmail}/>
                        </div>
                        <div className="form-group">
                            <label>Password :</label>
                            <input type ="text" className="form-control" value={this.state.password} onChange = {this.onChangePassword}/>
                        </div>
                        <div className="form-group">
                            <label>CPassword :</label>
                            <input type ="text" className="form-control" value={this.state.cpassword} onChange = {this.onChangeCPassword}/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type = "submit" value = "Update Details" className="btn-primary"/>
                        </div>
                    </form>
                </div>
            </Router>
        )
    }
}