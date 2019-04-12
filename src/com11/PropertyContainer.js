/* 한줄 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Input, Row } from "reactstrap";
import * as InputElem from "./InputIndex";
import * as LabelElem from "./LabelIndex";

const PropertyContainer = ({ jsonData }) => {
  let { input_type, label_type, ...others } = jsonData;

  //label

  if (LabelElem[label_type]) {
    let comp = LabelElem[label_type];
    let pros = { ...others };
    var label = React.createElement(comp, { ...pros });
  }

  //input
  if (InputElem[input_type]) {
    let comp = InputElem[input_type];
    let pros = { ...others };
    var input = React.createElement(comp, { ...pros });
  }


  return (
    <div className="row">
      {label}
      {input}
    </div>
  );
};

export default PropertyContainer;
