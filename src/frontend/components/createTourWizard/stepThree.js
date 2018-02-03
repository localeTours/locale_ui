import React from "react";
// import {Row, Col, Card, CardHeader, CardBody, Button, Badge, TabContent, TabPane, Nav, NavItem, NavLink, Table, Progress} from 'reactstrap';
import { Table } from 'reactstrap';
import './index.css';

export default class StepThree extends React.Component {
  render(){
      return(
        <div className='create-tour-step-three'>
          <div className='step-three-col-1'>
            <h1>Tour name placeholder</h1>
            <div className='tour-details'>
              <ul>
                <li>
                  Features:
                  <span>
                    feature 1
                  </span>
                  <span>
                    feature 2
                  </span>
                </li>
                <li>
                  Media:
                  <span>
                    <img src='https://images.unsplash.com/photo-1516810714657-e654b97f1d80?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4b0b6d8a68ebad0eada0e4da17737094&auto=format&fit=crop&w=634&q=80'
                    height='100px' />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className='step-three-col-2'>
            <span>Created Route Display</span>
          </div>
      </div>
    );
  }
}
