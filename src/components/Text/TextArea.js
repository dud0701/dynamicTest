import React,{ Component } from 'react';

const TextArea = (name, value) => {
    return (
        <div className="textbox">
           <div className="text label">
                <label>{name}</label>
            </div>
            <div className="text input">
                <textarea rows="1" cols="50">
                </textarea>
            </div>
        </div>
    )
}

export default TextArea;