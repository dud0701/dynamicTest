/* File */
import React, { Component } from "react";
import { Input } from "reactstrap";
import './InputFile.css';

/* const InputFile = ({ value, name, disabled, onChange }) => {
  return (
    <div className={"input file " + name}>
      <Input
        type="file"
        disabled={disabled}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}; */

class InputFile extends Component {
  state = {
    fileName: "파일명을 입력 해 주세요.",
  }

  handleFileName = (e) => {
    this.setState({
      fileName: e.target.files[0].name
    })
  } 
  render() {
    const { fileName } = this.state;
    const { handleFileName } = this; 
    const { value, name, disabled, onChange } = this.props;
    return(
      <div className={"input file " + name}>
        <Input type="text" id="fileName" className="file_input_textbox" value={fileName}/>
        <div className="file_input_div">
          <Input type="button" value="..." className="file_input_button"/>
          <Input type="file" className="file_input_hidden" id="text1" onChange={(e) => handleFileName(e)}/>
        </div> 
      </div>
    )
  }
}


export default InputFile;
