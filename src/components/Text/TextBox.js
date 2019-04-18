import React,{ Component } from 'react';

import PropTypes from 'prop-types';
import { Input } from 'reactstrap'; 
/* 
const TextBox = ({name, value}) => {
    return (
        <div className="textbox">
            <div className="text label">
                <label>{name}</label>
            </div>
            <div className="text input">
            <input type="text" value={value}/>
            </div>
        </div>
    )
} */

class TextBox extends Component {
    state = {
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
        return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            <div className={name}>
            <div className="text label prop">
                {this._render(name, key, label_type)}
            </div>
            <div className="text input prop">
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
        )
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


export default TextBox;