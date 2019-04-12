import React, { Component } from "react";
import { CustomInput, Label } from "reactstrap";

const LabelCheck = ({ name, onChange, disabled }) => {
  return (
    <div className={"label check " + name}>
        <CustomInput type="checkbox" onChange={onChange}><label>{name}</label></CustomInput>
    </div>
  );
};

export default LabelCheck;
