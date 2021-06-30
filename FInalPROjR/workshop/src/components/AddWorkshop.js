import  React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Button, Form, FormControl, Navbar} from "react-bootstrap";


export default  class Create extends  Component{

    state = {
        selectedFile: null
    };

    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    };

    // On file upload (click the upload button)
    onFileUpload = () => {

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "file",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        // Details of the uploaded file
        //console.log(this.state.selectedFile);

        // Request made to the backend api
        // Send formData object
        axios.post("http://localhost:4000/workshop/file-upload", formData);
    };


    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeCPassword = this.onChangeCPassword.bind(this);
		this.onChangeRole = this.onChangeRole.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name:'',
            last_name: '',
            phone:'',
            email:'',
            password:'',
            cpassword:'',
			role:'',
			filename:''
        }
    }
    onChangeFirstName(e){
        this.setState( {
            first_name: e.target.value
        });
    }
    onChangeLastName(e){
        this.setState( {
            last_name: e.target.value
        });
    }

    onChangePhone(e){
        this.setState( {
            phone: e.target.value
        });
    }

    onChangeEmail(e){

        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e){
        this.setState( {
            password: e.target.value
        });
    }
    onChangeCPassword(e){
        this.setState( {
            cpassword: e.target.value
        });
    }
	onChangeRole(e){
        this.setState( {
            role: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        this.onFileUpload();
        const obj = {
            first_name : this.state.first_name,
            last_name : this.state.last_name,
            phone : this.state.phone,
            email : this.state.email,
            password : this.state.password,
            cpassword : this.state.cpassword,
			role : this.state.role,
			filename : this.state.selectedFile.name
        };

        if(this.state.password === this.state.cpassword) {
            axios.post('http://localhost:4000/workshop/add', obj)
                .then(res => {
                    alert("Successfully Registered")
                    console.log(res.data)
                });
            //this.props.history.push('/EmpView');
        }
        else{
            alert('Passwords are different...')
        }



        this.setState({
            first_name:'',
            last_name: '',
            phone:'',
            email:'',
            password:'',
            cpassword:'',
			role:'',
			filename:''

        })

    }

    render() {
        return(
            <div className='container'>
                <Router>
                    <div className="container " style={{marginTop:10}}>
                        <h3 className="text-center">Workshop conductor Registration</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>First Name:</label>
                                <input type ="text" required className="form-control" value={this.state.first_name} onChange = {this.onChangeFirstName}/>
                            </div>
                            <div className="form-group">
                                <label>Last Name :</label>
                                <input type ="text" required = "Please enter name" className="form-control" value={this.state.last_name} onChange = {this.onChangeLastName}/>
                            </div>
                            <div className="form-group">
                                <label>Phone Number :</label>
                                <input type ="text" required = "Please enter address" className="form-control" value={this.state.phone} onChange = {this.onChangePhone}/>
                            </div>
                            <div className="form-group">
                                <label>Email Address :</label>
                                <input type ="text" required = "Please enter address" className="form-control" value={this.state.email} onChange = {this.onChangeEmail}/>
                            </div>
                            <div className="form-group">
                                <label>Password :</label>
                                <input type ="text" required = "Please enter address" className="form-control" value={this.state.password} onChange = {this.onChangePassword}/>
                            </div>
                            <div className="form-group">
                                <label>Re-Enter Password :</label>
                                <input type ="text" required = "Please enter address" className="form-control" value={this.state.cpassword} onChange = {this.onChangeCPassword}/>
                            </div>
							<div className="form-group">
                                <label>User Type :</label>
                                <input type ="text" required = "Please enter address" className="form-control" value={this.state.role} onChange = {this.onChangeRole}/>
                            </div>
							<br/>
                            <div className="form-group">
                                <label>Upload Reserch Materials :</label>
                                <input type="file" required = "Please upload file" className="form-control" onChange={this.onFileChange} />

                            </div>
                            <br/>
                            <div className="form-group">
                                <input type = "submit" value = "Register" className="btn-primary"/>
                            </div>
                        </form>
                    </div>
                </Router>
            </div>
        )
    }
}


