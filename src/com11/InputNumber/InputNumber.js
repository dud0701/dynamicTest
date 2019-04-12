/* Number */
import React, { Component } from "react";
import { Input } from "reactstrap";



const InputNumber = ({
  value,
  name,
  disabled,
  onChange,
  min_value,
  max_value
}) => {
  return (
    <div className={"input number " + name}>
      <Input
        type="number"
        step="1"
        min={min_value}
        max={max_value}
        disabled={disabled}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputNumber;
