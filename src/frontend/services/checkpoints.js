import {checkDb, tourDb} from "./db";
import firebase from "../../fire";


export function deleteDBCheckpoint(state){

    var deletedCheckpointArray = state.props.tour.currentTour.checkpoints.filter(checkpoint => checkpoint.checkpoint !== state.props.checkpoint.id);
    tourDb.doc(state.props.tour.currentTourId).update({
        checkpoints: deletedCheckpointArray
    })
    checkDb.doc(state.props.checkpoint.id).delete()
        .then(() => {
            state.props.deleteCheckpoint(state.props.checkpoint.id)
        })
        .catch((err) => {
            console.log(err)
        })
}