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
        axios.post("http://localhost:8086/researcher/file-upload", formData);
    };



    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeCPassword = this.onChangeCPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            name: '',
            phone:'',
            date:'',
            email:'',
            password:'',
            cpassword:''
        }
    }

    onChangeName(e){
        this.setState( {
            name: e.target.value
        });
    }

    onChangePhone(e){
        this.setState( {
            phone: e.target.value
        });
    }
    onChangeDate(e){
        this.setState( {
            date: e.target.value
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
    onSubmit(e){
        e.preventDefault();
        this.onFileUpload();
        const obj = {

            name : this.state.name,
            phone : this.state.phone,
            date : this.state.date,
            email : this.state.email,
            password : this.state.password,
            cpassword : this.state.cpassword
        };

                if(this.state.password === this.state.cpassword) {
                    axios.post('http://localhost:8086/researcher/add', obj)
                        .then(res => {
                            alert("Registration Successfully")
                            console.log(res.data)
                        });
                    this.props.history.push('/EmpView');
                }
                else{
                    alert('Passwords are mismatching...')
                }

        this.setState({

            name :'',
            phone:'',
            date:'',
            email:'',
            password:'',
            cpassword:''

        })

    }

    render() {
        return(
            <div className='container'>
            <Router>
                <div className="container " style={{marginTop:10}}>
                    <h3 className="text-center">Researcher Registration Form</h3>
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <label>Name :</label>
                            <input type ="text" required = "Please enter name" className="form-control" value={this.state.name} onChange = {this.onChangeName}/>
                        </div>

                        <div className="form-group">
                            <label>Contact Number :</label>
                            <input type ="text" required = "Please enter Contact Number" className="form-control" value={this.state.phone} onChange = {this.onChangePhone}/>
                        </div>

                        <div className="form-group">
                            <label>Date :</label>
                            <input type ="text" required = "Please enter Date" className="form-control" value={this.state.date} onChange = {this.onChangeDate}/>
                        </div>

                        <div className="form-group">
                            <label>Email :</label>
                            <input type ="text" required = "Please enter Email" className="form-control" value={this.state.email} onChange = {this.onChangeEmail}/>
                        </div>
                        <div className="form-group">
                            <label>Password :</label>
                            <input type ="text" required = "Please enter Password" className="form-control" value={this.state.password} onChange = {this.onChangePassword}/>
                        </div>
                        <div className="form-group">
                            <label>Confirm Password :</label>
                            <input type ="text" required = "Please enter Confirm Password" className="form-control" value={this.state.cpassword} onChange = {this.onChangeCPassword}/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label>Upload Reserch Documents :</label>
                            <input type="file" required = "Please upload file" className="form-control" onChange={this.onFileChange} />
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type = "submit" value = "Register Researcher" className="btn-primary"/>
                        </div>
                    </form>
                </div>
            </Router>
            </div>
        )
    }
}


