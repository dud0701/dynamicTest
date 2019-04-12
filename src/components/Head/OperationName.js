import React from 'react';
import { Input } from 'reactstrap';
import './OperationName.css';



const OperationName = ({opNum, checked}) => {
    return (
            <div className="Headers">
                <div className="Operation LabelA">
                    <label>Operation</label>
                </div>
                <div className="Operation Input">
                    <Input type="text" name={opNum} defaultValue={opNum}/>
                </div>
              {/*   <div className="Operation Disabled">
                    <p><input type="checkbox" name={opNum} checked={checked} id={opNum}/><label for={opNum}>Disabled</label></p>
                </div> */}
            </div>
    )
}

export default OperationName;