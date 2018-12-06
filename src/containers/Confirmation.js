import React, { Component } from "react";

export default class Confirmation extends Component {
    render() {
        return (
            <div>
                <h2>Confirm Registration</h2>
                <ul>
                    <li><b>Name:</b> {this.props.fieldValues.name}</li>
                    <li><b>Email:</b> {this.props.fieldValues.email}</li>
                    <li><b>Age:</b> {this.props.fieldValues.age}</li>
                    <li><b>Colours:</b> {this.props.fieldValues.colours.join(', ')}</li>
                </ul>
                <ul className="form-fields">
                    <li className="form-footer">
                        <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
                        <buttin className="btn - primary pull-right" onClick={this.props.submitRegistration}>Submist Registration</buttin>
                    </li>
                </ul>
            </div>
        )
    }
}