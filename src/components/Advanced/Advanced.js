import React, { Component } from 'react';
import AdvancedBody from './AdvancedBody';
import './Advanced.css';
import PropertyContainer from '../../com11/PropertyContainer';

class Advanced extends Component {

    state={
        open:false
    }

    handlePanel = () => {
        this.setState({
            open : !this.state.open
        });
    }

    render() {
        const { tempData } = this.props;
        return( 
            <div className="advanced">
                <div className="advanced-title" onClick={this.handlePanel}>
                {this.state.open? "▼" : "▶"} Advanced Title
                </div>
               <div className="advanced-body">
                    {this.state.open && 
                         tempData.map(data => (
                            <PropertyContainer jsonData={data} key={"a" + data.name}/>
                        ))
                        
                    }
                </div>
        </div>
        )
    }
}



export default Advanced;