import React, {Component} from 'react';

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
       
    }
    render() {
        
        if (this.props.campsite) {
            return (
                <div className="row" />
            );
        }
        return<div />;
  }
}
    export default CampsiteInfo;