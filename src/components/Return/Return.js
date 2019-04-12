import React, { Component } from 'react';
import ReturnBody from './ReturnBody';
import './Return.css';

class Return extends Component {
    tempData = [
        {id: 0, label: "String"},
        {id: 1, label: "CSV"},
        {id: 2, label: "File"},
    ]
    render() {
        const { tempData } = this;
        return( 
            <div className="return">
                <div className="return-title" onClick={this.handlePanel}>
                    <h1>Return value</h1>
                </div>
               <div className="return-body">
                    <ReturnBody tpData={tempData}/>
                </div>
        </div>
        )
    }
}


export default Return;