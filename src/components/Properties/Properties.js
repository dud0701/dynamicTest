import React, { Component } from 'react';
import PropertiesBody from './PropertiesBody';
import PropertyContainer from '../../com11/PropertyContainer';
import Advanced from "../Advanced/Advanced";

class Properties extends Component {


    state = {
       
    }

     componentWillMount() {
        //console.log(this.props.propRealData);
        //console.log(this.props.advanRealData);
        //console.log(this.props.mutData);
        const { propRealData,advanRealData,mutData } = this.props;
        this.handleJson(propRealData,"parameters");
        this.handleJson(advanRealData,"options");
        this.handleJson(mutData,"mutually_exclusive_group");

    } 

    handleJson = (jsonData, flag) => {
       // console.log(jsonData);
        let temp = [];
        let { mutIndex, advanRealData } = this.props;
        let labelEx = [{parameters:"LabelText", options:"LabelCheck", mutually_exclusive_group:"LabelRadio"}];
    
        jsonData.forEach(function(obj, index){

            //option(advanced)인 경우 label은 checkbox, prameter일 경우 label은 text, mutually~일 경우 label=radio
            let inputType = "";
            let labelType=labelEx[0][flag]; //labe_type 처리 => mutually option 둘 중 하나만 선택(radio)
            let isMutData =false;

            //action, nargs 처리 -> 
            //input이 없는 경우(action="storetrue") -> label은 checkbox로 
            //type, choices처리 -> input_type
            if(obj.action === "storetrue" || obj.type === "bool" || obj.type === "str2bool") {
                inputType = "none";
            }

           // obj.action === "store_true" ? temp["input_type"] : "none";

           //input이 list인 경우
           if(obj.action === "append" && (obj.nargs === "+" || obj.nargs === "*")){
                inputType = "InputMultiText";
           }

           //obj.type="str" 인 경우 textbox, selectbox 구분 
           if(obj.type === "str") {
                inputType = obj.choices ? "InputSelect" : "InputText";
           }

           if(obj.type === "int" || obj.type === "float") {
               inputType = "InputNumber";
           }

           //advanced data에 mutually Data인것을 표기
           if(flag === "options") {
              for(let i=0;i<mutIndex.length; i++) {
                  if(mutIndex[i] == index) {
                      isMutData = true;
                  }
              }

           }

           temp.push({input_type: inputType, label_type: labelType, data: obj, isMutData: isMutData});            
        })
        
       // console.log(temp);
        this.setState ({
            [flag] : temp
        })
    }
    
    render() {
        const { tempData, advancedData, propRealData, advanRealData, mutData, mutIndex} = this.props;
        const { mutually_exclusive_group,  options, parameters} = this.state;
        return( 
            <div className="properties">
                <div className="properties-title" onClick={this.handlePanel} >
                    <h1>Properties</h1>
                </div>
               <div className="properties-body">

                {parameters.map(data => (
                    <PropertyContainer jsonData={data} key={"a" + data.data.name}/>
                ))} 

                {
                     mutually_exclusive_group.length ?  
                        mutually_exclusive_group.map(data => (
                            <PropertyContainer jsonData={data} key={"m" + data.data.name}/>
                        ))  : null 
                }
                
                </div>
              
                 <Advanced adData={options} mutData={mutually_exclusive_group} mutIndex={mutIndex}/> 
        </div>
        )
    }
}


export default Properties;