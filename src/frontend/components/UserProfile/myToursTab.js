import React, {Component} from 'react';
import {Row, Col, Card, CardHeader, CardBody, Button, Badge, TabContent, TabPane, Nav, NavItem, NavLink, Table, Progress} from 'reactstrap';
import classnames from 'classnames';


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
                        <div>Tour Name - {this.props.info.tour}</div>
                    </td>
                    <td className="text-center">
                        <img src={'img/flags/USA.png'} alt="USA" style={{height: 24 + 'px'}}/>
                    </td>
                    <td>
                        <div className="clearfix">
                            <div className="float-left">
                                <strong>New York City</strong>
                            </div>
                            <br/>
                            <div className="float-left">
                                <small className="text-muted">Mid-town Manhattan</small>
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








