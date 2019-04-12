import React, { Component } from 'react';
import './App.css';
import PropertiesTemplate from './containers/PropertiesTemplate';
import HeadTemplate from './containers/HeadTemplate';
import BodyTemplate from './containers/BodyTemplate';
import TempData from './components/data';
/* import { Button } from 'reactstrap'; */

class App extends Component {
  state = {


  }

opType = [
  {id: 0, label: "Action"},
  {id: 1, label: "Verification"},
  {id: 2, label: "System Calls"},
  {id: 3, label: "Interactives"},
  {id: 4, label: "Plugins"},
]
operations = [
  {id: 0, value:"", imagePath:'https://lh3.googleusercontent.com/9MeehakhUNFgmdb0f9EQE3ChJGUaCOPrcJfM4qpwmpy940iXo5hnEa6FWu1pAzjA4c2KIqAG5gzm4vVYpuz74qieAOV4mPo=s688', label:"Rossum"},
  {id: 1, value:"./logo.svg", imagePath:"https://lh3.googleusercontent.com/9MeehakhUNFgmdb0f9EQE3ChJGUaCOPrcJfM4qpwmpy940iXo5hnEa6FWu1pAzjA4c2KIqAG5gzm4vVYpuz74qieAOV4mPo=s688", label:"SQL"},
  {id: 2, value:"REST API", imagePath:"./logo.svg",label:"REST API"},
  {id: 3, value:"Excel Advanced", imagePath:"./logo.svg",lable:"Excel Advanced"},
  {id: 4, value:"JSON Select", imagePath:"./logo.svg",lable:"JSON Select"},
  {id: 5, value:"Text to Speech", imagePath:"./logo.svg",label:"Text to Speech"},
  {id: 6, value:"File/Folder Op", imagePath:"./logo.svg",label:"File/Folder Op"},
  {id: 7, value:"File Monitor", imagePath:"./logo.svg",label:"File Monitor"},

]

operation = {
  head: {
    opName : "Operation 3",
    checked : true
  }
}


propertyDatas = [
  {name:"api_key", input_type:"InputText", label_type:"LabelText", value:"", disabled:false, onChange:""},
  {name:"pdf_file", input_type:"InputFile", label_type:"LabelText", value:"", disabled:false, onChange:""},
  
]

advancedDatas = [
  {name:"timeout", input_type:"InputNumber", label_type:"LabelCheck", value:"", disabled:false, onChange:""},
]
/* return table select 테스트용 data */
selectData={
  name:"Variable name",
  input_type:"DropBoxTable",
  label_type:"LabelText",
  data:[
    {IsArray:"false", VariableName:"aaa", GroupName:"aaa"},
    {IsArray:"true", VariableName:"bbb", GroupName:"bbb"},
    {IsArray:"false", VariableName:"ccc", GroupName:"ccc"},
  ]
}

/* componentWillMount() {
  const datas = TempData[0]["argoslabs.api.rossum"];
  console.log(datas);
  console.log(datas.options);
 // console.log(datas.options.length);
  for(let variable of datas.options) {   
    console.log(variable);
  }
 // console.log(Object.keys(data[0]).length);
 
  
} */

/*   submitform = event => {
    const { fields } = this.state;
    console.log(this.state);
    event.preventDefault();
  }; */

  _handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name] : value
    });
  }
  _handleChangeTypeOp = () => {

  }
  render() {
    const { _handleChange, opType, _handleChangeTypeOp, operations, operation, propertyDatas,advancedDatas,selectData } = this;

    return (
      <PropertiesTemplate head={(
        <HeadTemplate opType={opType} onChangeTypeOp={_handleChangeTypeOp} operations={operations} operation={operation}/>
      )} body={(
        <BodyTemplate propertyDatas={propertyDatas} advancedDatas={advancedDatas} selectData={selectData}/>
      )}>   
      </PropertiesTemplate>
    );
  }
}

export default App;
