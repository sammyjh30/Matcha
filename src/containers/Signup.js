import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Signup.css";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "../components/AppliedRoute";
import Routes from "../Routes";

export default class Signup extends Component {
    getInitialState() {
        return {
            step: 1
        }
    }

    render() {
        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated
        };

        return (
          <div className="Login">
            <Routes childProps={childProps} />
          </div>
        );
    }
}