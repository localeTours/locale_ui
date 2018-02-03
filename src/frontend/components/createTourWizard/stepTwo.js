import React from "react";
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import MapContainer from '../MapContainer';

export default class StepTwo extends React.Component {
  constructor(){
      super();
      this.state = {
          checkpoints: [],
          modal: false
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
    let tourId = this.props.tourId
    return (
     <div>
      <div className='create-tour-step-two'>
        <div className='step-two-col-1'>
          <h1>Locations</h1>
          <Button className='add-checkpoint'
            onClick={this.toggle}> checkpoint 1<i class="fa fa-plus-circle" aria-hidden="true"></i>
          </Button>

            <Modal isOpen={this.state.modal} toggle={this.toggle} className='checkpoint-modal'>
            <ModalHeader toggle={this.toggle}>MAP</ModalHeader>
            <ModalBody>
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
           <FormGroup>
             <Label for="checkpoints">Checkpoint(s):</Label>
             <Input type="text" ref="checkpointName" placeholder='name'/>
           </FormGroup>
           <FormGroup>
             <Label>Coordinates:</Label>
             <Input type="number" ref="lat" />
             <Input type="number" ref="long"  />
           </FormGroup>
          <ul>
              {
                  this.state.checkpoints.length > 0 ?
                  this.state.checkpoints.map((check, index) =>
                      <li key={index}>Checkpoint Name: {check.checkpointName}, Lat: {check.lat}, Long: {check.long}</li>
                  )
                  :
                  <li>No checkpoints</li>
              }
          </ul>
          <Button onClick={this.makeCheckpoint}>Make Checkpoint</Button>
        </Form>

        </div>
        <div className='step-two-col-2'>
          MAP
        </div>
        {/* <p>{tourId}</p> */}
      </div>
    </div>
    );
  }
}
