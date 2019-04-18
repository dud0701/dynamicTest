/* selectBox */
import React, { Component } from "react";
import { Input } from "reactstrap";


const InputSelect = ({ data/* options, name, disabled, onChange */ }) => {
   // console.log(data.choices[0]);
  return (
    <div className={"input select " + data.name}>
      <Input type="select" name={data.name} /* onChange={onChange} */ bsSize="sm">
        {data.choices.map(( index ) => {
          console.log(index);
          return (
            <option value={index}>
              {index}
            </option>
          );
        })}
      </Input>
    </div>
  );
};

export default InputSelect;
