import React from 'react';
import Select, {  components } from 'react-select';

const Selectbox = ({ opType, onChange }) => {
    return (
        <Select options={opType} onChange={onChange} />
     
    )
}

export default Selectbox;