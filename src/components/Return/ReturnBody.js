import React, { Component } from 'react';
import PropertyContainer from "../../com11/PropertyContainer";

class ReturnBody extends Component {

    returnDatas = [
        {name:"Result type", input_type:"InputSelect", label_type:"LabelText", value:"", disabled:false, onChange:"", options:[{id:0, value:"String"},{id:1, value:"CSV"}, {id:2, value:"File"}] }
      ]

    render(){
        const { returnDatas } = this;
        return(
            <div className="return body">
                {
                    returnDatas.map(data => (
                        <PropertyContainer jsonData={data} key={"b" + data.name}/>
                    ))
                }
            </div>
        )
    }
}

export default ReturnBody;