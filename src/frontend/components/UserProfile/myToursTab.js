import React, {Component} from 'react';


export default class MyToursTab extends Component {
    render(){

        return(
                <tbody>
                    <tr>
                        <td className="text-center">
                            <div className="avatar">
                                <img src={'img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                                <span className="avatar-status badge-success"></span>
                            </div>
                        </td>
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








