import React from 'react';
import Select, {  components } from 'react-select';

const Selectbox = ({ opType, onChangeTypeOp }) => {
    return (
        <Select options={opType}/>
     
    )
}

export default Selectbox;