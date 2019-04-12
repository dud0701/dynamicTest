/* 기본 inputBox */
import React, { Component } from "react";
import { Input } from "reactstrap";

const InputText = ({ value, name, disabled, onChange }) => {
  return (
    <div className={"input text " + name}>
      <Input
        disabled={disabled}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputText;
