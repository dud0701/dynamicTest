import React, { Component } from 'react';
import PropertiesBody from './PropertiesBody';
import './Properties.css';

class Properties extends Component {

    state={
        open:true
    }

    handlePanel = () => {
        this.setState({
            open : !this.state.open
        });
    }

    render() {
        return( 
            <div className="properties">
                <div className="properties-title" onClick={this.handlePanel} >
                    {this.state.open? "▼" : "▶"} Properties Title
                </div>
               <div className="properties-body">
                    {this.state.open && <PropertiesBody />}
                </div>
        </div>
        )
    }
}


export default Properties;