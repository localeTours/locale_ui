import React from "react";
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import MapContainer from '../MapContainer';

import './index.css';

export default class StepTwo extends React.Component {
  constructor(){
      super();
      this.state = {
          checkpoints: [],
          modal: false,
          zoom: 13,
          maptype: 'roadmap',
          place_formatted: '',
          place_id: '',
          place_location: ''
      }
      // this.tours = [];
      this.makeCheckpoint = this.makeCheckpoint.bind(this);
      this.toggle = this.toggle.bind(this);
  }

    toggle() {
     this.setState({
       modal: !this.state.modal
     });
   }

   createTourForm(e){
       e.preventDefault();
   var currentState = this.state;

   var docToUp = tourDb.doc(doc.id);

     // Adding checkpoints here. Still WIP
     currentState.checkpoints.forEach((check, i) => {
         checkDb.add({
             name: check.checkpointName,
             longitude: check.long,
             latitude: check.lat,
             tour: doc.id
         }).then(function(checkDoc){
             checkIdArr.push({
                 checkpoint: checkDoc.id
             });
             return docToUp.update({
                 checkpoints: checkIdArr
             });
         }).then(function(res){
             console.log(res);
         }).catch(function(err){
             console.log(err);
         });
     });
     console.log(checkIdArr);
 }

 componentDidMount() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -33.8688, lng: 151.2195},
      zoom: 13,
      mapTypeId: 'roadmap',
    });

    map.addListener('zoom_changed', () => {
      this.setState({
        zoom: map.getZoom(),
      });
    });

    map.addListener('maptypeid_changed', () => {
      this.setState({
        maptype: map.getMapTypeId(),
      });
    });

    let marker = new window.google.maps.Marker({
      map: map,
      position: {lat: -33.8688, lng: 151.2195},
    });

    // initialize the autocomplete functionality using the #pac-input input box
    let inputNode = document.getElementById('pac-input');
    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputNode);
    let autoComplete = new window.google.maps.places.Autocomplete(inputNode);

    autoComplete.addListener('place_changed', () => {
      let place = autoComplete.getPlace();
      let location = place.geometry.location;

      this.setState({
        place_formatted: place.formatted_address,
        place_id: place.place_id,
        place_location: location.toString(),
      });

      // bring the selected place in view on the map
      map.fitBounds(place.geometry.viewport);
      map.setCenter(location);

      marker.setPlace({
        placeId: place.place_id,
        location: location,
      });
    });
  }

   makeCheckpoint(e){
    //Makes the checkpoint then adds to checkpoint state
    e.preventDefault();

    var newArr = this.state.checkpoints.slice();
    var data = {
        checkpointName: this.refs.checkpointName.value,
        lat: this.refs.lat.value,
        long: this.refs.long.value
    };
    newArr.push(data);

    this.setState({
        checkpoints: newArr
    });
  }

  render(){
    // console.log(this.props)
    let style = {
     height: '300px'
    }

    let modalStyle = {
        border: 'solid 2px blue'
    }
    let tourId = this.props.tourId
    return (
     <div>
      <div className='create-tour-step-two'>
        <div className='step-two-col-1'>
          <h1>Locations</h1>
          <Button className='add-checkpoint'
            onClick={this.toggle}> checkpoint 1<i class="fa fa-plus-circle" aria-hidden="true"></i>
          </Button>

            <Modal isOpen={this.state.modal} toggle={this.toggle}  className='checkpoint-modal'>
            <ModalHeader toggle={this.toggle}>MAP</ModalHeader>
            <ModalBody style={ modalStyle }>
              <div className='modal-main'>
                <div className='modal-inputs'>
                  <Input type='text' placeholder='title/message'/>
                  <Input type='text' placeholder='Add destination or click on the map'/>
                  <Input type='file' />
                </div>
                <div className='media-preview'>Media Preview</div>
            </div>
            </ModalBody>
            <ModalFooter>

              <Button className='upload-media-btn' color="primary" onClick={this.toggle}>Upload media</Button>
              <Button className='create-checkpoint-btn' color="secondary" onClick={this.toggle}>Create checkpoint</Button>
            </ModalFooter>
          </Modal>

          {/* <label>Checkpoint(s):</label>
          <input type="text" ref="checkpointName" placeholder='name'/>
          <input type="number" ref="lat" placeholder='latitude'/>
          <input type="number" ref="long" placeholder='longitude' /> */}
          <Form>
        </Form>

        </div>
        <div className='step-two-col-2'>
            <div id='pac-container'>
              <input id='pac-input' type='text' placeholder='Enter a location' />
            </div>
            <div id='map'/>
        </div>
        {/* <p>{tourId}</p> */}
      </div>
    </div>
    );
  }
}
