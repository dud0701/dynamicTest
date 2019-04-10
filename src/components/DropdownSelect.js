import React from 'react';

const DropdownSelect = ({ name, placeholder, required, val, _handleChange}) => (
    <div>
            <select name={name} required={required} onChange={_handleChange}>
                <option value="">Select an ooption</option>
                {val.map(value => <option value={value} key={value}>{value}</option> )}
            </select>
    </div>
);

export default DropdownSelect;

