/* 기본 inputBox */
import React, { Component } from "react";
import { Input } from "reactstrap";

const InputMultiText = ({ data, value, name, disabled, onChange }) => {
  return (
    <div className={"input multi_text " + data.name}>
      <Input
        disabled={disabled}
        name={data.name}
        onChange={onChange}
        value={data.value}
        bsSize="sm"
      />
    </div>
  );
};

export default InputMultiText;
