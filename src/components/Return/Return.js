import React, { Component } from 'react';
import ReturnBody from './ReturnBody';
import './Return.css';

class Return extends Component {

    state={
        open:true
    }

    handlePanel = () => {
        this.setState({
            open : !this.state.open
        });
        console.log(this.state.open);
    }

    render() {
        return( 
            <div className="return">
                <div className="return-title" onClick={this.handlePanel}>
                {this.state.open? "▼" : "▶"} Return Title
                </div>
               <div className="return-body">
                    {this.state.open && <ReturnBody />}
                </div>
        </div>
        )
    }
}


export default Return;