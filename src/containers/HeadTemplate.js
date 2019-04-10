import React, { Component } from 'react';
import Selectbox from '../components/SelectBox/SelectboxField';
import SelectBoxWithImage from '../components/SelectBox/SelectBoxWithImage';
import './HeadTemplate.css';
import OperationName from '../components/Head/OperationName';

class HeadTemplate extends Component {
    render() {
        const { opType, onChangeTypeOp, operations, operation } = this.props;
        return(
            <div className="headTemplate">
                <div className="selects">
                    <div className="head-select">
                        <Selectbox opType={opType} onChangeTypeOp={onChangeTypeOp}/>
                    </div>
                    <div className="head-select">
                        <SelectBoxWithImage operations={operations} onChangeTypeOp={onChangeTypeOp}/>
                    </div>
                </div>            

                <div className="operations">
                    <OperationName opNum={operation.head.opName} checked={operation.head.checked}/>
                </div>
            </div>
        )
    }
}

export default HeadTemplate;