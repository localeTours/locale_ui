

import React, {Component} from 'react';
// The below should be able to return any tours which the user has been invited to.


export default class SentToursTab extends Component {
    render(){

        return(

            <tbody>
            <tr>

                <td>
                    <div className="clearfix">
                        <div className="float-left">
                            <strong>Tour Name </strong>
                        </div>
                        <br/>
                        <div className="float-left">
                            <small className="text-muted">{this.props.info.tour}</small>
                        </div>
                    </div>
                </td>

                <td className="text-center">
                    <i className="fa fa-bicycle" style={{fontSize: 24 + 'px'}}></i>
                </td>
                <td>
                    <div className="small text-muted">July</div>
                    <strong>10 sec ago</strong>
                </td>
            </tr>

            </tbody>
        )
    }

}











