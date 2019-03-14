import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Navigation = props => (
        <div className="container-fluid">
        <div className="row">
            <div className="col-sm">
                This is my logo!
            </div>
            <div className="col-sm">
                <FontAwesomeIcon icon="igloo"/>
            </div>
        </div>
        </div>
)

export default Navigation