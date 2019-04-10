import React from 'react';
import Select, {  components } from 'react-select';


//Component responsible for displaying an option in the menu.
  const Option = (props) => {
    return (components.Option && 
    <components.Option {...props}>
     <span><img src={props.data.imagePath} height="20" width="20" alt="test"/></span>{props.data.label}
    </components.Option>
    );
  }

  //The component that displays the selected value in the input for a single select.
  const singleValue = (props) => {
    return (
    <components.SingleValue {...props}>
      <span><img src={props.data.imagePath} height="20" width="20" alt="test"/></span>{props.data.label}
    </components.SingleValue>
    );
  }


const SelectboxWithImage = ({ operations, onChangeTypeOp }) => {
    return (
         <Select options={operations} components={{ Option: Option , SingleValue: singleValue }}/>      
    )
}

export default SelectboxWithImage;