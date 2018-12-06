import React, { Component } from "react";
import { ButtonGroup, ButtonToolbar, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import ReactDOM from 'react-dom';

export default class AccountFields extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
            email: ""
        }
        this.saveAndContinue = this.saveAndContinue.bind(this);
    }
    
    saveAndContinue(e) {
        e.preventDefault()

        //Get values via this.refs
        var data = {
            name        : this.state.name,
            password    : this.state.password,
            email       : this.state.email
        }

        this.props.saveValues(data)
        this.props.nextStep()
    }
    
    render() {
        return ( 
            <div>
                {/* <h2>Account Details</h2> */}
                <ControlLabel>Account Details</ControlLabel>
                <ul className="form-fields">
                    <FormGroup controlId="name" bsSize="large">
                        <ControlLabel>Name</ControlLabel>
                        <FormControl
                        autoFocus
                        type="text"
                        defaultValue={ this.props.fieldValues.name } 
                        onChange={({target}) => this.setState({name: target.value})}
                        />
                    </FormGroup>

                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                        autoFocus
                        type="password"
                        defaultValue={ this.props.fieldValues.password } 
                        onChange={({target}) => this.setState({password: target.value})}
                        />
                    </FormGroup>

                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                        autoFocus
                        type="email"
                        defaultValue={ this.props.fieldValues.email } 
                        onChange={({target}) => this.setState({email: target.value})}
                        />
                    </FormGroup>
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button
                                bsSize="large"
                                onClick={ this.saveAndContinue }
                                >
                                Save and Continue
                            </Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </ul>
            </div>
        );
    }
}