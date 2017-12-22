import React from "react";
import { tourDb, checkDb } from "../services/db";

export default class TourDetailComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            loading: false,
            tour: {}
        };
    }

    componentWillMount(){
        this.setState({
            loading: true
        });
        tourDb.doc(this.props.match.params.tour).get().then((doc) => {
            var tour = doc.data()
            tour.checkpoints = [];
            doc.data().checkpoints.forEach(check => {
                if(typeof check == "object"){
                    checkDb.doc(check.checkpoint).get().then((resp) => {
                        tour.checkpoints.push(resp.data());
                    }).catch((err) => {
                        console.log(err);
                    });
                }
            });
            this.setState({
                loading: false,
                tour: tour
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    render(){
        console.log(this.state.tour);
        return (
            <div>
                {
                    this.state.loading ? 
                    <h3>Loading...</h3>
                    :
                    <div>
                        <h3>{this.state.tour.name}</h3>
                        <p>Description: {this.state.tour.description}</p>
                        <p>Checkpoints</p>
                        {
                            this.state.tour.checkpoints.map(c => 
                                {console.log(c)}
                            )
                        }
                    </div>
                }
            </div>
        )
    }
}