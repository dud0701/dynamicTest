import React, { Component } from 'react';
import './File.css';

class File extends Component {
    state = {
        fileName: "파일을 선택 해 주세요."
    }
    handleFileName=(ref, e) => {
        this.setState({
            fileName: e.target.files[0].name
        })
        //console.log(ref.selection);
        let aa = document.getElementById('test1');
        
    }


    render() {
        const { fileName } = this.state;
        const { handleFileName } = this;
        return (
            <div className="files">
            <div className="file label">
                <label>name</label>
            </div>
            <div className="file input">
                <input id="fileName" className="file_input_textbox" readonly value={fileName}/>
                <div className="file_input_div">
                    <input type="button" value="..." class="file_input_button"/>
                    <input type="file" className="file_input_hidden" id="test1" ref={ref => {
                        this.input = ref; }} onChange={(e) => handleFileName(this.input, e)}/>
                </div>
            </div>
        </div>
        )
    }
} 


export default File;