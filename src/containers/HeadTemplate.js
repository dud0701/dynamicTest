import React, { Component } from 'react';
import Selectbox from '../components/SelectBox/SelectboxField';
import SelectBoxWithImage from '../components/SelectBox/SelectBoxWithImage';
import OperationName from '../components/Head/OperationName';

class HeadTemplate extends Component {
    render() {
        const { opType, onChange, operations, operation, onOpChange } = this.props;
        return(
            <div className="headTemplate">
                <div className="selects">
                    <div className="head-select">
                        <Selectbox opType={opType} onChange={onChange}/>
                    </div>
                    <div className="head-select">
                        <SelectBoxWithImage operations={operations} onChange={onOpChange}/>
                    </div>
                </div>            

               
                    <OperationName opNum={operation.head.opName} checked={operation.head.checked} onChange={onChange}/>
                
            </div>
        )
    }
}

export default HeadTemplate;