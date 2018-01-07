import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';

import { CustomMap } from './GoogleMap';
import { setLatLng } from '../../actions/index';

class MapContainer extends Component {
  componentWillMount() {
    this.props.setLatLng();

  }

  render() {
    if(!this.props.account.isSignedIn){
      return <Redirect to='/login' />
    } else if(this.props.map.latLng.lat === null || this.props.map.latLng.lng === null) {
      return (
        <div>
          <h1>Loading Map...</h1>
        </div>
      )
    } else {
      return(
        <div id="map-container">
          <CustomMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100vh` }} />}
            mapElement={<div style={{ height: `100%` }}
            center={{lat: this.props.map.latLng.lat, lng: this.props.map.latLng.lng}}/>}
          />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return ({
    map: state.map,
    account: state.account
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setLatLng: setLatLng
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
