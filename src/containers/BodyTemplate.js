import React, { Component } from 'react';
import Properties from '../components/Properties/Properties';
import Advanced from '../components/Advanced/Advanced';
import Return from '../components/Return/Return';

import File from '../components/File/File';
import TextBox from '../components/Text/TextBox';
import './BodyTemplate.css';

class BodyTemplate extends Component {
    render() {
        const  name  = "a";
        return(
            <div className="bodyTemplate">
                <div className="properties">
                    <Properties/>
                </div>
                <div className="advanced">
                    <Advanced />
                </div>
             
                <div className="return">
                   <Return />
                </div>

                <div className="test">
                   <File/>
                   <TextBox name={name} value={name} label_type={"text"}/>
                   <TextBox name={name} value={name} label_type={"checkbox"}/>
                   <TextBox name={name} value={name} label_type={"radio"}/>
                </div>
            </div>
        )
    }
}

export default BodyTemplate;