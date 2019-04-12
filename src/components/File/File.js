import React, { Component } from 'react';
import './File.css';

class File extends Component {

    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    state = {
        fileName: "파일을 선택 해 주세요.",
    
    }
    handleFileName=(ref, e, bb) => {
        this.setState({
            fileName: e.target.files[0].name
        })
        //console.log(ref);
       // console.log(window.URL.createObjectURL(e.target.files[0]));
        //console.log(window.location.pathname);
        var bbb = ref.selection.createRangeCollection()[0].text.toString(); 
        //console.log(bbb);
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
                <input id="fileName" className="file_input_textbox" readOnly value={fileName}/>
                <div className="file_input_div">
                    <input type="button" value="..." className="file_input_button"/>
                    <input type="file" className="file_input_hidden" id="test1" ref={this.myRef} onChange={(e) => handleFileName(this.myRef, e, this)}/>
                </div>
            </div>
        </div>
        )
    }
} 


export default File;