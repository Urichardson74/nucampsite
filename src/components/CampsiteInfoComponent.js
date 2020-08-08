import React, {Component} from 'react';
import CampsiteInfo from './CampsiteInfoComponent';
class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
       
    }
    render() {
        
        if (campsite) {
            return (
                <div className="row" />
            );
        }
        return<div />;
  }
}
    export default CampsiteInfo;