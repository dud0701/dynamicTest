import React, { Component } from 'react';
import './App.css';
import PropertiesTemplate from './containers/PropertiesTemplate';
import HeadTemplate from './containers/HeadTemplate';
import BodyTemplate from './containers/BodyTemplate';
import TempData from './components/data';
/* import { Button } from 'reactstrap'; */

class App extends Component {
  state = {
    curOpSelected : "Rossum",
    opRealData : ""

  }

opType = [
  {id: 0, label: "Action", value: "Action", name:"Action"},
  {id: 1, label: "Verification", value: "Verification", name:"Verification"},
  {id: 2, label: "System Calls", value: "System Calls", name:"System Calls"},
  {id: 3, label: "Interactives", value: "Interactives", name:"Interactives"},
  {id: 4, label: "Plugins", value: "Plugins", name:"Plugins"},
]
operations = [
  {id: 0, name:"Rossum", value:"Rossum", imagePath:'', label:"Rossum"},
  {id: 1, name:"SQL", value:"SQL", imagePath:"", label:"SQL"},
  {id: 2, name:"REST API", value:"REST API", imagePath:"",label:"REST API"},
  {id: 3, name:"Excel Advanced", value:"Excel Advanced", imagePath:"",label:"Excel Advanced"},
  {id: 4, name:"JSON Select", value:"JSON Select", imagePath:"",label:"JSON Select"},
  {id: 5, name:"Text to Speech", value:"Text to Speech", imagePath:"",label:"Text to Speech"},
  {id: 6, name:"File/Folder Op", value:"File/Folder Op", imagePath:"",label:"File/Folder Op"},
  {id: 7, name:"File Monitor", value:"File Monitor", imagePath:"",label:"File Monitor"},

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
  input_type:"DropBoxTable",
  label_type:"LabelText",
  data:{
    name:"Variable name",
    choices :[
    {value:1, IsArray:"false", VariableName:"aaa", GroupName:"aaa"},
    {value:2, IsArray:"true", VariableName:"bbb", GroupName:"bbb"},
    {value:3, IsArray:"false", VariableName:"ccc", GroupName:"ccc"},
    ]
  }
}

 componentWillMount() {
  const datas = TempData[0]["argoslabs.data.rdb"];
  //const datas = TempData[0]["argoslabs.api.rossum"];
 // console.log(datas);
  this.setState({
    opRealData : datas

    
  })

/*   let options = [];  //advanced 
  let parameters = [];  //필수입력항목
  let pluginSpec = {}; 
  let mutuallyData = datas.mutually_exclusive_group;

  let opLen = datas.options.length;  //option
  let op = datas.options.slice(9, opLen); //option

  let prams = datas.parameters; //prameters

  let nargs = [{narg:"?", value:"single"}, {narg:"+", value:"list"},{narg:"*", value:"list_null"},{narg:"N", vlaue:"N"}]; //op

  //dumpspec
  pluginSpec["dispaly_name"] = datas.display_name;//UI에 보여질 이름
  //pluginSpec["name"] = datas.name;//플러그인 패키지명(플러그인ID)
  //pluginSpec["plugin_version"] = datas.plugin_version; //플러그인 버전
  //pluginSpec["platform"] = datas.platform;//사용가능한 OS 구분
  pluginSpec["options"] = "";//옵션 목록(Advanced에 숨긴다.)
  pluginSpec["description"] = datas.description;//설명
  pluginSpec["parameters"] = ""; //파라미터 목록(필수 입력항목)
  pluginSpec["icon"] = datas.icon;//아이콘
 */
  //mutually_exclusive_group처리

  //parameters data 추출 (필수입력사항)
  /* for(let param of prams) {
    let type = "";
    if(param.type === "str" && choices !== null ){
      type = "select"; 
    }
    let par = {
     name: param.metavar ? param.metavar : param.name,
     value: param.value === null ? param.default : param.value, 
    }
  } */

/*   
  this.setState({
    

  }) */
 //console.log(datas.options.length);
  /* for(let variable of datas.options) {   
    
  } */
 // console.log(Object.keys(data[0]).length);
 
  
} 

/*   submitform = event => {
    const { fields } = this.state;
    console.log(this.state);
    event.preventDefault();
  }; */

  handleChange = event => {
    const { name, value } = event;
     this.setState({
      [name] : value
    }); 
  }

  handleSelectChange = e => {
    this.setState({
     curOpSelected: e.value,
    });
  }
  
  render() {
    const { handleChange, opType, operations, operation, propertyDatas,advancedDatas,selectData, handleSelectChange } = this;

    const { opRealData } = this.state;

    return (
      <PropertiesTemplate head={(
        <HeadTemplate opType={opType} onOpChange={handleSelectChange} operations={operations} operation={operation}/>
      )} body={(
        <BodyTemplate propertyDatas={propertyDatas} advancedDatas={advancedDatas} selectData={selectData} onChange={handleChange}
                      propRealData={opRealData.parameters} advanRealData={opRealData.options} mutuallyGroup={opRealData.mutually_exclusive_group}/>
      )}>   
      </PropertiesTemplate>
    );
  }
}

export default App;
