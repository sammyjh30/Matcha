import React, { Component } from "react";
import { ButtonGroup, ButtonToolbar, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import ReactDOM from 'react-dom';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


const currentYear = new Date().getFullYear();
const fromMonth = new Date(currentYear, 0);
const toMonth = new Date(currentYear, 11);
// const toMonth = new Date(currentYear + 10, 11);

function YearMonthForm({ date, localeUtils, onChange }) {
    const months = localeUtils.getMonths();
  
    const years = [];
    for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
      years.push(i);
    }
  
    const handleChange = function handleChange(e) {
      const { year, month } = e.target.form;
      onChange(new Date(year.value, month.value));
    };
  
    return (
      <form className="DayPicker-Caption">
        <select name="month" onChange={handleChange} value={date.getMonth()}>
          {months.map((month, i) => (
            <option key={month} value={i}>
              {month}
            </option>
          ))}
        </select>
        <select name="year" onChange={handleChange} value={date.getFullYear()}>
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </form>
    );
    }

export default class AccountFields extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
            email: "",
            month: fromMonth,
        }
        this.handleYearMonthChange = this.handleYearMonthChange.bind(this);
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

    handleYearMonthChange(month) {
        this.setState({ month });
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

                    <div className="YearNavigation">
                        <DayPicker
                        month={this.state.month}
                        fromMonth={fromMonth}
                        toMonth={toMonth}
                        captionElement={({ date, localeUtils }) => (
                            <YearMonthForm
                            date={date}
                            localeUtils={localeUtils}
                            onChange={this.handleYearMonthChange}
                            />
                        )}
                        />
                    </div>
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button
                                bsSize="large"
                                onClick={ this.saveAndContinue }
                                >
                                Save &amp; Continue
                            </Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </ul>
            </div>
        );
    }
}