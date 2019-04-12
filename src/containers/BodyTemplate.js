import React, { Component } from "react";
import Properties from "../components/Properties/Properties";
import Advanced from "../components/Advanced/Advanced";
import Return from "../components/Return/Return";
import PropertyContainer from "../com11/PropertyContainer";
import File from "../components/File/File";
import TextBox from "../components/Text/TextBox";
import "./BodyTemplate.css";
import { Input, Label, CustomInput } from 'reactstrap';

class BodyTemplate extends Component {
  render() {
    const { propertyDatas, advancedDatas, selectData } = this.props;

 
    const data = {
      name: "api_key",
      input_type: "InputText",
      label_type: "LabelText",
      value: "",
      disabled: false,
      onChange: ""
    };
    return (
      <div className="bodyTemplate">
        <div className="properties">
          <Properties tempData={propertyDatas}/>
        </div>
        <div className="advanced">
          <Advanced tempData={advancedDatas}/>
        </div>

        <div className="return">
          <Return />
        </div>

        <div className="test">
        <PropertyContainer jsonData={selectData}/>
        {/*   {propertyDatas.map(data => (
            <PropertyContainer jsonData={data} key={"a" + data.name}/>
          ))} */}
        </div>
      </div>
    );
  }
}

export default BodyTemplate;
