import React, { Component } from 'react';
import './App.css';
import TextAreaFields from './components/TextAreaField';
import InputTextField from './components/InputTextField';
import DropdownSelect from './components/DropdownSelect';
import PropertiesTemplate from './containers/PropertiesTemplate';
import HeadTemplate from './containers/HeadTemplate';
import BodyTemplate from './containers/BodyTemplate';
import TempData from './components/data';

class App extends Component {
  state = {


  }

  Rossum = {
    fields : [
    {
      placeholder: "Purpose of loan",
      name:"name",
      input_type:"dropdown",
      required:true,
      values:[
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7"
      ]
    },
    {
      placeholder:"Name",
      name:"remaining_values",
      input_type:"big_text",
      required: true
    },
    {
      placeholder:"email",
      name:"email",
      input_type:"text",
      label_type:"checkbox",
      /* input_type1:{
        type: "text",
        label_type:"checkbox",

      } */
      required: true
    },
    {
      placeholder:"Prefered time to call you",
      name:"contact_time",
      input_type:"text",
      label_type:"text",
      required: true
    },
    {
      placeholder:"test",
      name:"radio_test", 
      input_type:"text",
      label_type:"radio",
      required: true
    }
  ]
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

componentWillMount() {
  const datas = TempData[0]["argoslabs.api.rossum"];
  console.log(datas);
  console.log(datas.options);
  console.log(datas.options.length);
  for(let variable of datas.options) {   
    console.log(variable);
  }
 // console.log(Object.keys(data[0]).length);
 
  
}

  submitform = event => {
    const { fields } = this.state;
    console.log(this.state);
    event.preventDefault();
  };

  _handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name] : value
    });
  }
  _handleChangeTypeOp = () => {

  }
  render() {
    const { fields } = this.Rossum;
    const { _handleChange, opType, _handleChangeTypeOp, operations, operation } = this;

    return (
      <PropertiesTemplate head={(
        <HeadTemplate opType={opType} onChangeTypeOp={_handleChangeTypeOp} operations={operations} operation={operation}/>
      )} body={(
        <BodyTemplate operations/>
      )}>   
      </PropertiesTemplate>
    /*   <form onSubmit={this.submitform}>
        {fields.map(form => {
          if (form.input_type === "text") {
            return (
              <InputTextField
                name={form.name}
                placeholder={form.placeholder}
                required={form.required}
                key={"t" + form.name}
                _handleChange={_handleChange}
                label_type={form.label_type}
              />
            );
          }

          if(form.input_type === "big_text") {
            return (
              <TextAreaFields
                name={form.name}
                placeholder={form.placeholder}
                required={form.required}
                key={"b"+form.name}
                _handleChange={_handleChange}
              />
            );
          }

          if(form.input_type === "dropdown") {
            return (
              <DropdownSelect
                name={form.name}
                placeholder={form.placeholder}
                required={form.required}
                val={form.values}
                key={"d" + form.name}
                _handleChange={_handleChange}
              />
            );
          }
        })}
        <input type="submit"/>
      </form> */
    );
  }
}

export default App;
