import React,{ Component } from 'react';
import {Label} from 'reactstrap';

const LabelText = ({ name, disabled }) => {
    return (
        <div className={"label text " + name}>
            <Label disabled={disabled}>{name}</Label>
        </div>
    )
}

export default LabelText;