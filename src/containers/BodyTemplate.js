import React, { Component } from "react";
import Properties from "../components/Properties/Properties";
import Advanced from "../components/Advanced/Advanced";
import Return from "../components/Return/Return";
import PropertyContainer from "../com11/PropertyContainer";
import File from "../components/File/File";
import TextBox from "../components/Text/TextBox";
import { Input, Label, CustomInput } from 'reactstrap';

class BodyTemplate extends Component {
  state = {
    mutData:"" //mutally에 해당되는 data
  }

  componentWillMount() {
    //console.log(this.props.propRealData);
    //console.log(this.props.advanRealData);
    let { propRealData, advanRealData, mutuallyGroup } = this.props;
    const mutData = []; //mutually_exclusive에 해당하는 option객체들
    let indexArr = [];

    //mutually_exclusive_group 존재여부 확인 후 
    if(mutuallyGroup.length > 0) {

      //option데이터에서 mutually_exclusive에 있는 name존재하는지 확인 후 
        advanRealData.forEach((obj, i)=> {
        mutuallyGroup[0].options.forEach((name)=> {
          if(obj.name == name){
            indexArr.push(i);
            mutData.push(obj);
          }
        });
      });       
      
    /*   var mutData = advanRealData.filter((data, i) => {
        return mutuallyGroup[0].options.includes(data.name);
      }) */

    }
    

    this.setState({
      mutData : mutData,
      mutIndex : indexArr
    });
  } 

  render() {
    const { propertyDatas, advancedDatas, selectData, propRealData, advanRealData } = this.props;
    const { mutData, mutIndex } = this.state;

    return (
      <div className="bodyTemplate">
     
          <Properties tempData={propertyDatas} advancedData={advancedDatas} propRealData={propRealData} advanRealData={advanRealData} mutData={mutData} mutIndex={mutIndex}/>
     
        
         {/*  <Advanced tempData={advancedDatas}/> */}
       
          <Return />
        

        <div className="test">
       {/*  <PropertyContainer jsonData={selectData}/> */}
        {/*   {propertyDatas.map(data => (
            <PropertyContainer jsonData={data} key={"a" + data.name}/>
          ))} */}
        </div>
      </div>
    );
  }
}

export default BodyTemplate;
