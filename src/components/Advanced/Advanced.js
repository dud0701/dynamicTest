import React, { Component } from 'react';
import AdvancedBody from './AdvancedBody';
import './Advanced.css';

class Advanced extends Component {

    state={
        open:false
    }

    handlePanel = () => {
        this.setState({
            open : !this.state.open
        });
        console.log(this.state.open);
    }

    render() {
        return( 
            <div className="advanced">
                <div className="advanced-title" onClick={this.handlePanel}>
                {this.state.open? "▼" : "▶"} Advanced Title
                </div>
               <div className="advanced-body">
                    {this.state.open && <AdvancedBody />}
                </div>
        </div>
        )
    }
}



export default Advanced;