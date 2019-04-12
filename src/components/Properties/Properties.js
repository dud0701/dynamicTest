import React, { Component } from 'react';
import PropertiesBody from './PropertiesBody';
import './Properties.css';
import PropertyContainer from '../../com11/PropertyContainer';

class Properties extends Component {




    render() {
        const { tempData } = this.props;
        return( 
            <div className="properties">
                <div className="properties-title" onClick={this.handlePanel} >
                    <h1>Properties</h1>
                </div>
               <div className="properties-body">
               {tempData.map(data => (
                    <PropertyContainer jsonData={data} key={"a" + data.name}/>
                ))}
                  {/*   <PropertiesBody /> */}
                </div>
        </div>
        )
    }
}


export default Properties;