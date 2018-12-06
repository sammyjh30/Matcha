import React, { Component } from "react";
import { ButtonGroup, ButtonToolbar, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Slider from 'react-rangeslider'
import {values} from '../lib/radiobox-value';
// var getRadioOrCheckboxValue     = require('../lib/radiobox-value')
var getRadioOrCheckboxValue     = values;

// https://material-ui.com/lab/slider/
// https://whoisandy.github.io/react-rangeslider/#

const styles = {
    root: {
      width: 300,
    },
    slider: {
      padding: '22px 0px',
    },
  };

export default class SurveyFields extends Component {
    state = {
        value: 3,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };
    

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

        const { classes } = this.props;
    const { value } = this.state;
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
                    <form class="range-field my-4 w-100">
                        <input type="range" min="0" max="100" />
                    </form>
                    <div className={classes.root}>
                        <Slider
                        classes={{ container: classes.slider }}
                        value={value}
                        min={0}
                        max={6}
                        step={1}
                        onChange={this.handleChange}
                        />
                    </div>
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button
                                bsSize="large"
                                onClick={this.props.previousStep}
                                >
                                Back
                            </Button>
                        </ButtonGroup>
                        <div className="btn -default pull-right">
                        <ButtonGroup>
                            <Button
                                bsSize="large"
                                // onClick={ this.saveAndContinue }
                                onClick={this.nextStep}
                                >
                                Save &amp; Continue
                                {/* Save and Continue */}
                            </Button>
                        </ButtonGroup>
                        </div>
                    </ButtonToolbar>

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

// StepSlider.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };