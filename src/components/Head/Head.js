import React, { Component } from 'react';

class Head extends Component {

    handleChangeType = () => {

    }

    render(){
        const { handleChangeType } = this;
        return(
            <div className="operationType">
                <select onChange={(e) => handleChangeType(e)}>
                </select>
            </div>

        );
    }
}

export default Head;

