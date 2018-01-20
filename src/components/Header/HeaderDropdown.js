import React, {Component} from 'react';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavDropdown
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, hashHistory } from 'react-router-dom';
import { signOut } from '../../frontend/actions';

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

  goToProfile() {
    fetch('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0')
    .then((resp) => resp.blob())
    .then((data) => {
      const reader = new FileReader();
      reader.onloadend = (e) => {
        document.getElementById("test-image").setAttribute('src', e.target.result);
      }
      reader.readAsDataURL(data);
    })
  }

  logOut(){
      this.props.signOut();
      this.setState({
          loggedOut: true
      })

  }

  dropAccnt() {
    if(this.props.account.isSignedIn){
      return (
          !this.state.loggedOut ?
        <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle nav>
            <img id="test-image" src={this.props.account.user.photoURL} className="img-avatar" alt="admin@bootstrapmaster.com"/>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
            <DropdownItem onClick={this.goToProfile.bind(this)}>
              <NavLink to={"/user/" + this.props.account.user.uid} activeClassName="active">
                Profile
              </NavLink>
            </DropdownItem>
            <DropdownItem onClick={this.logOut.bind(this)} ><i className="fa fa-lock"></i> Logout</DropdownItem>
          </DropdownMenu>
        </NavDropdown>
              :
         <Redirect to='/login'/>
      );
    } else {
      return <p>Loading...</p>
    }


  }

  render() {

    const {...attributes} = this.props;
    return (
      this.dropAccnt()
    );
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.account
  }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        signOut: signOut
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDropdown)


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
