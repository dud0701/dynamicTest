import React, { Component } from 'react';
import PropertyContainer from "../../com11/PropertyContainer";

class ReturnBody extends Component {

    state = {
        currentSelected:'String',
    }
    returnDatas = {
        name:"Result type",
        input_type:"InputSelect", 
        label_type:"LabelText", 
        value:"", 
        disabled:false,
        options:[{id:0, value:"String"},{id:1, value:"CSV"}, {id:2, value:"File"}] 
    }

  
    stringProp =  [{name:"Variable name", input_type:"DropBoxTable", label_type:"LabelText", value:"", 
                    data:[ {value:1, IsArray:"false", VariableName:"test", GroupName:"GroupA"},
                            {value:2, IsArray:"true", VariableName:"var", GroupName:"GroupA"},
                            {value:3, IsArray:"false", VariableName:"index", GroupName:"GroupB"},]}];
    csvProp =  [{name:"Group name", input_type:"InputText", label_type:"LabelText", value:""}];
    fileProp = [{name:"File path", input_type:"InputFile", label_type:"LabelText", value:""},
                {name:"Variable name", input_type:"DropBoxTable", label_type:"LabelText", value:"", data:[{}]}]

   

    handleSelectChange = (e) => {
        this.setState({
            currentSelected: e.target.value
        })
    }

    render(){
        const { returnDatas, handleSelectChange, stringProp, csvProp, fileProp } = this;

        return(
            <div className="return body">
                <PropertyContainer jsonData={returnDatas} onChange={handleSelectChange} />
                <div>
                    {
                        this.state.currentSelected === "String" ?
                        <div className="return_value">
                            {stringProp.map(prop => (
                                <PropertyContainer jsonData={prop} key={"b" + prop.name} />
                                ))
                            } 
                        </div> :null
                    }

                    {
                        this.state.currentSelected === "CSV" ?
                        <div className="return_value">
                            {csvProp.map(prop => (
                                <PropertyContainer jsonData={prop} key={"b" + prop.name} />
                                ))
                            } 
                        </div>  :null
                    }

                    {
                        this.state.currentSelected === "File" ?
                        <div className="return_value">
                            {fileProp.map(prop => (
                                <PropertyContainer jsonData={prop} key={"b" + prop.name} />
                                ))
                            } 
                        </div>  :null
                    }
                </div>


            </div>
        )
    }
}

export default ReturnBody;