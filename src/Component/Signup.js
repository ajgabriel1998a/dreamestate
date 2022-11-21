import React, { Component } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default class Signup extends Component {
    state = {
        name: '',
        email: '',
        contact: '',
        yourself: '',
        error: {
            nameError: '',
            contactError: '',
            emailError: '',
            yourselfError: ''
        },
        formValid: false
    }

    handleChange = (e) => {
        console.log(e);
        console.log(e.target.value);
        console.log(typeof (e.target.value));
        console.log(e.target.id);

        if (e.target.id === 'name') {
            this.validateName(e.target.value);
        }
        if (e.target.id === 'email') {
            this.validateEmail(e.target.value);
        }
       
        if (e.target.id === 'contact') {
            this.validateContact(e.target.value);
        }
        if (e.target.id === 'yourself') {
            this.validateYourself(e.target.value);
        }
    }

    validateName = (name) => {
        let nameError = this.state.nameError;
        let formValid = this.state.formValid;

        if (name.trim() === '') {
            
            name = 'This field is required';
            formValid = false;

        }
        else if (name.trim().length <= 3) {
            nameError = 'Please enter more than 3 characters';
            formValid = false;
        }
        else {
            formValid = true;
            nameError = '';
        }
        this.setState({
            name: name,
            formValid,
            error: { ...this.state.error, nameError }
        });

        return formValid;
    }

    validateEmail = (email) => {
        let emailError = this.state.emailError;
        let formValid = this.state.formValid;

        var pattern  = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!pattern.test(email)) {
            formValid = false;
            emailError = 'Please enter valid email';
        }
        else {
            formValid = true;
            emailError = '';

        }

        this.setState({
            email: email,
            formValid,
            error: { ...this.state.error, emailError }
        });

        return formValid;
    }

    

    validateContact = (contact) => {
        let contactError = this.state.contactError;
        let formValid = this.state.formValid;

        if (contact.trim() === '') {
           
            contact = 'This field is required';
            formValid = false;

        }
        else if (contact.trim().length <= 10) {
            contactError = 'Please enter more than 10 characters';
            formValid = false;
        }
        else if (!isNaN(parseInt(contact.trim))) {
            contactError = 'Please enter numbers';
            formValid = false;
        }
        else {
            formValid = true;
            contactError = '';

        }

        this.setState({
            contact: contact,
            formValid,
            error: { ...this.state.error, contactError }
        });

        return formValid;
    }

    validateYourself = (yourself) => {
        let yourselfError = this.state.yourselfError;
        let formValid = this.state.formValid;

        if (yourself.trim() === '') {
           
            yourself = 'This field is required';
            formValid = false;

        }
        else if (yourself.trim().length <= 20) {
            yourselfError = 'Please enter more than 20 characters';
            formValid = false;
        }
        else {
            formValid = true;
            yourselfError = '';

        }

        this.setState({
            yourself: yourself,
            formValid,
            error: { ...this.state.error, yourselfError }
        });

        return formValid;
    }


    handleSubmit = (e) => {
        e.preventDefault();

        if (this.validateName(this.state.name) && this.validateEmail(this.state.email)  && this.validateContact(this.state.contact) && this.validateYourself(this.state.yourself)) {
            alert('Account is Successfully Created!');
            this.props.addData(this.state);
            this.setState({
                name: '',
                email: '',
                contact: '',
                yourself: '',

            });
        }
    
    }

    render() {
        return (
            <div>


                <Box

                    style={{ padding: "10px" }}
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50ch' },
                        border: '1px dashed grey'


                    }}
                    noValidate
                    autoComplete="off"

                >
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                id="name"
                                onChange={this.handleChange}
                                label="Name"
                                defaultValue={this.state.firstname}
                            /><br />{this.state.error.nameError}<br />
                            
                            <TextField
                                id="email"
                                onChange={this.handleChange}
                                label="Email ID"
                                defaultValue={this.state.email}
                            /><br />{this.state.error.emailError}<br />
                            <TextField
                                id="contact"
                                onChange={this.handleChange}
                                label="Contact Number"
                                defaultValue={this.state.contact}
                            /><br />{this.state.error.contactError}<br />
                            <TextField
                                id="yourself"
                                label="Tell Me About Yourself"
                                onChange={this.handleChange}
                                multiline
                                rows={4}
                                defaultValue={this.state.yourself}
                            /><br />{this.state.error.yourselfError}<br />

                            <Button type="submit" variant="contained">Submit Form</Button>
                        </form>



                    </div>

                </Box> <br />

            </div>
        )
    }
}


