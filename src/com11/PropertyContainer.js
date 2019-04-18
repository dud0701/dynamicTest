/* 한줄 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Input, Row, Button } from "reactstrap";
import * as InputElem from "./InputIndex";
import * as LabelElem from "./LabelIndex";

const PropertyContainer = ({ jsonData, onChange }) => {
  let { input_type, label_type, ...others } = jsonData;
 
   //label
  if (LabelElem[label_type]) {
    let comp = LabelElem[label_type];
    let pros = { ...others };
    var label = React.createElement(comp, { ...pros });
  }

  //input 없는 경우도 있다. 
  //=> action이 store_true일경우 input 값 없음
  //input
   if (InputElem[input_type]) {
    let comp = InputElem[input_type];
    let pros = { onChange, ...others };
    var input = React.createElement(comp, { ...pros });
  }
  

  return (
    <div className="form-group">
      {label}
      {input}
      
    </div>
  );
};



export default PropertyContainer;
