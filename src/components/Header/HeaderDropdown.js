import React, {Component} from 'react';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavDropdown
} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signOut } from '../../frontend/actions';
import { Redirect } from 'react-router-dom';




class HeaderDropdown extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  logOut(){
      this.props.signOut();
      this.setState({
          loggedOut: true
      })

  }

  dropAccnt() {

    return (
        !this.state.loggedOut ?
      <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav>
          <img src={'img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>

          <DropdownItem onClick={this.logOut.bind(this)} ><i className="fa fa-lock"></i> Logout</DropdownItem>
        </DropdownMenu>
      </NavDropdown>
            :
       <Redirect to='/login'/>
    );

  }

  render() {
    const {...attributes} = this.props;
    return (
      this.dropAccnt()
    );
  }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        signOut: signOut
    }, dispatch)
}

export default connect(undefined, mapDispatchToProps)(HeaderDropdown)


// export default HeaderDropdown;

//Previous drop down items which can be reused
//
// <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
// <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
// <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
// <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
// <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
// <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
// <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
// <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
// <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
// <DropdownItem divider/>
// <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>
