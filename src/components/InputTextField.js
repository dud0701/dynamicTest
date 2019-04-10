import React,{ Component } from 'react';
/* import { id } from 'postcss-selector-parser'; */
import PropTypes from 'prop-types';
import './InputTextField.css'

class InputTextfield extends Component {

    state= { 
        checked: false,
        isCheckbox : this.props.label_type === "checkbox" ? true : false 
    }

    handleUpdateToggle = () => {
        const { checked } = this.state;
        this.setState({ checked: !checked });
    }



    _render = (name, key, label_type) => {
        
        if(label_type === "text"){
            return (
                <label>
                    <span>{name}</span>
                </label>          
               
            )
        }

        if(label_type === "radio") {
            return (
                <label>
                    <Radiobox name={name} type={label_type}/>    
                    <span>{name}</span>      
                </label>      
            )
        }

        if(label_type === "checkbox") {
            return (
                <label>
                    <Checkbox name={name} type={label_type} onToggle={this.handleUpdateToggle} />
                    <span>{name}</span>  
                </label>
            )
        }

    }





    render() {
        const { name, placeholder, label_type, required, _handleChange, key} = this.props;
        const { checked, isCheckbox } = this.state;

       
        return(
            <div>
                <div className="label prop">
                    {this._render(name, key, label_type)}
                </div>
                <div className="input prop">
                <input
                    disabled = {isCheckbox && !checked ? true : false }
                    type="text"
                    name={name}
                    required={required}
                    autoComplete="off"
                    placeholder={placeholder}
                    onChange={_handleChange}
                />
            </div>
            </div>
        );
 
    }
}


const Checkbox = ({type = 'checkbox', name, onToggle }) => (
    <input className="prop" type={type} name={name} onChange={onToggle}/>
)

Checkbox.prototype = {
    type:PropTypes.string,
    name: PropTypes.string
}

const Radiobox = ({type = 'radio', name }) => (
    <input type={type} name={name} />
)

Radiobox.prototype = {
    type:PropTypes.string,
    name: PropTypes.string
}


export default InputTextfield;


