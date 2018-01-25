import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";

import { auth, tourDb, checkDb, storageRef, userDb } from "../services/db";
import firebase from '../../fire';
import { signIn } from '../actions';

// import { Form, Label, FormGroup, Button, Input } from 'reactstrap';
// import { Button } from 'reactstrap';



class CreateTour extends React.Component {

    constructor(){
        super();

        this.state = {
            checkpoints: [],


        }

        this.tours = [];

        this.makeCheckpoint = this.makeCheckpoint.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }
