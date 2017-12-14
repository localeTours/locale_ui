import React from "react";
import { tourDb, checkDb } from "../services/db";

export default class TourDetailComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            loading: false
        };

        this.tour = "";
    }

    componentWillMount(){
        this.setState({
            loading: true
        });
        tourDb.doc(this.props.match.params.tour).get().then((resp) => {
            this.tour = resp.data();
            this.tour.checkpoints.forEach(c => {
                checkDb.doc(c.checkpoint).get().then((resp) => {
                    console.log(resp.data());
                }).catch((err) => {
                    console.log(err);
                })
            });
            this.setState({
                loading: false
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    render(){
        return (
            <div>
                {
                    this.state.loading ? 
                    <h3>Loading...</h3>
                    :
                    <div>
                        <h3>{this.tour.name}</h3>
                        <p>Description: {this.tour.description}</p>
                        <p>Checkpoints</p>
                        <ul>
                        {
                            this.tour.checkpoints.map((c, i) => 
                                <li>{c.checkpoint}</li>
                            )
                        }
                        </ul>
                    </div>
                }
            </div>
        )
    }
}