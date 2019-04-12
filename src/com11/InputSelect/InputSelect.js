/* selectBox */
import React, { Component } from "react";
import { Input } from "reactstrap";


const InputSelect = ({ options, name, disabled, onChange }) => {
  return (
    <div className={"input select " + name}>
      <Input type="select" disabled={disabled} name={name} onChange={onChange}>
        {options.map(({ value, key = "op" + value }) => {
          return (
            <option value={value} key={key}>
              {value}
            </option>
          );
        })}
      </Input>
    </div>
  );
};

export default InputSelect;
