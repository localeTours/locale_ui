import React from "react";
import { tourDb, checkDb } from "../services/db";


export default class CreateTour extends React.Component {
    
    constructor(){
        super();

        this.state = {
            tourName: "",
            checkpoints: [], 
            tourDescription: "",
            startDate: "",
            endDate: "",
            isPrivate: null,
            inOrder: null 
        }

        this.makeCheckpoint = this.makeCheckpoint.bind(this);
        this.createTourForm = this.createTourForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    createTourForm(e){
        e.preventDefault();
        // Adding checkpoints here. Still WIP
        // checkDb.add({
        //     last
        // }).then(function(){

        // })
        //Adding Tours to DB
        // tourDb.add({
        //     name: this.state.tourName,
        //     description: this.state.tourDescription,
        //     startDate: startDate,
        //     endDate: endDate,
        //     isPrivate: this.state.isPrivate,
        //     inOrder: this.state.inOrder
        //   }).then(function(doc){
        //     console.log(doc);
        //   }).catch(function(err){
        //     console.log(err);
        //   })
    }

    makeCheckpoint(e){
        //Makes the checkpoint then adds to checkpoint state
        e.preventDefault();

        var newArr = this.state.checkpoints.slice();
        var coordinates = {
            lat: this.refs.lat.value,
            long: this.refs.long.value
        };
        newArr.push(coordinates);
        
        this.setState({
            checkpoints: newArr
        });

    }

    handleChange(e){
        //For the inputs of the tour form
        e.preventDefault();

        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    
    render(){
        // Tour form and Checkpoint form
        return (
            <div>
                <form>
                    <label htmlFor="tourName">Tour Name</label>
                    <input onChange={this.handleChange} type="text" name="tourName" />

                    <label htmlFor="tourDescription">Tour Description</label>
                    <input onChange={this.handleChange} type="text" name="tourDescription"/>

                    <label htmlFor="startDate">Start Date</label>
                    <input onChange={this.handleChange} type="date" name="startDate"/>

                    <label htmlFor="endDate">End Date</label>
                    <input onChange={this.handleChange} type="date" name="endDate"/>

                    <label htmlFor="isPrivate">Is Private?</label>
                    <input onChange={this.handleChange} type="checkbox" name="isPrivate"/>

                    <label htmlFor="hasToBeInOrderCheckpoints">Checkpoints in Order?</label>
                    <input onChange={this.handleChange} type="checkbox" name="inOrder"/>

                    <label>Checkpoint(s):</label>
                    <input type="text" ref="checkpointName" />
                    <input type="number" ref="order" />
                    <input type="number" ref="lat" />
                    <input type="number" ref="long" />
                    <ul>
                        {
                            this.state.checkpoints.length > 0 ?
                            this.state.checkpoints.map((check, index) => 
                                <li key={index}>Checkpoint Name: {check.name}, Lat: {check.lat}, Long: {check.long}</li>
                            )
                            :
                            <li>No checkpoints</li>
                        }
                    </ul>
                    <button onClick={this.makeCheckpoint}>Make Checkpoint</button>

                    <input type="submit" onSubmit={this.createTourForm} value="make tour" />
                </form>
            </div>
        )
    }
}