import React, { Component } from "react";
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
                <h2>Account Details</h2>
                <ul className="form-fields">
                    <li>
                        <label>Name</label>
                        <input type="text" ref="name" defaultValue={ this.props.fieldValues.name } onChange={({target}) => this.setState({name: target.value})}/>
                    </li>
                    <li>
                        <label>Password</label>
                        <input type="password" ref="password" defaultValue={ this.props.fieldValues.password } onChange={({target}) => this.setState({password: target.value})}/>
                    </li>
                    <li>
                        <label>Email</label>
                        <input type="email" ref="email" defaultValue={ this.props.fieldValues.email } onChange={({target}) => this.setState({email: target.value})}/>
                    </li>
                    <li className="form-footer">
                        <button onClick={ this.saveAndContinue }>Save and Continue</button>
                    </li>
                </ul>
            </div>
        );
    }
}