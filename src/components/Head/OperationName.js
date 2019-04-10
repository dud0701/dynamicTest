import React from 'react';
import './OperationName.css';

const OperationName = ({opNum, checked}) => {
    return (
            <div className="Headers">
                <div className="Operation LabelA">
                    <label>Operation</label>
                </div>
                <div className="Operation Input">
                    <input type="text" name={opNum} value={opNum}/>
                </div>
                <div className="Operation Disabled">
                    <p><input type="checkbox" name={opNum} checked={checked} id={opNum}/><label for={opNum}>Disabled</label></p>
                </div>
            </div>
    )
}

export default OperationName;