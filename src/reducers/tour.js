import React from "react";
import { Link } from "react-router-dom";
import { tourDb, checkDb } from "../services/db";


export default class TourComponent extends React.Component {

    constructor(){
        super();
        this.state = {
            tours: []
        }
    }
    
    componentDidMount(){
        var newArr = this.state.tours.slice();
        tourDb.get().then((docs) => {
            docs.forEach(doc => {
                var tour = {
                    id: doc.id,
                    data: doc.data().name,
                };
                newArr.push(tour);
                this.setState({
                    tours: newArr
                });
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    render(){
        return (
            <div>
                <ul>
                    {
                        this.state.tours.length < 1 ? 
                        <li>No tours Available</li>
                        :
                        this.state.tours.map((tour, i) => 
                            <li key={i}><Link to={"/tour/"+tour.id}>{tour.data}</Link></li>
                        )
                    }
                </ul>
            </div>
        )
    }
}