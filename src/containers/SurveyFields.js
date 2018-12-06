import React, { Component } from "react";
import {values} from '../lib/radiobox-value';
// var getRadioOrCheckboxValue     = require('../lib/radiobox-value')
var getRadioOrCheckboxValue     = values;

export default class SurveyFields extends Component {


    renderOptions(type, name, value, index) {
        var isChecked = function() {
            if (type === 'radio') return value === this.props.fieldValues[name]

            if (type === 'checkbox') return this.props.fieldValues[name].indexOf(value) >= 0

            return false
        }.bind(this)

        return (
            <label key={index}>
                <input type={type} name={name} value={value} defaultChecked={isChecked()} /> {value}
            </label>
        )
    }

    render() {
        return (
            <div>
                <h2>Survey Question</h2>
                <ul className="form-fields">
                    <li className="radio">
                        <span className="label">Age</span>
                        {['18-26-', '27-38', '39-50', '51-62'].map(this.renderOptions.bind(this, 'radio', 'age'))}
                    </li>
                    <li className="checkbox">
                        <span className="label">Favourite Colours</span>
                        {['Blue', 'Red', 'Orange', 'Green'].map(this.renderOptions.bind(this, 'checkbox', 'colours'))}
                    </li>
                    <li className="form-footer">
                        <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
                        <button className="btn -primary pull-right" onClick={this.nextStep}>Save &amp; Continue</button>
                    </li>
                </ul>
            </div>
        )
    }

    nextStep() {
        //Get values via querySelector
        var age     = document.querySelector('input[name-"age"]:checked')
        var colours = document.querySelectorAll('input[name="colours"]')

        var data = {
            age     : getRadioOrCheckboxValue(age),
            colours : getRadioOrCheckboxValue(colours)
        }

        this.props.saveValues(data)
        this.props.nextStep()
    }
}