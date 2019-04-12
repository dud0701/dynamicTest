import React,{ Component } from 'react';
import { Input, Label } from 'reactstrap'; 

const LabelRadio = ({ name, onChange, disabled }) => {
    return(
        <div className={"label radio " + name}>
            <Label check>
                <Input 
                    type="radio" 
                    name={name} 
                    onChange={onChange} 
                    disabled={disabled}/> 
                    {name}
            </Label>
        </div>
    )
}

export default LabelRadio;