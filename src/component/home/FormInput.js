import React, { Component } from "react";



export default class FormInput extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            focused : false
        }
    }

    handleFocus = () => {
        this.setState ({
            focused : true
        })
    }
    

    render() {
        const {label, errormessage, onChange, id, ...inputProps} = this.props;
        return (
            <div className="sign-up-bar">
                <label className="sign-in-label">{label}</label>
                <input className="form-control" 
                {...inputProps}
                onChange={onChange}
                onBlur={this.handleFocus}
                onFocus = {() => inputProps.name === "confirmPassword" && this.setState({focused : true}) }
                focused={this.state.focused.toString()}
                />
                <span>{errormessage}</span>
            </div>
        )
    }
}