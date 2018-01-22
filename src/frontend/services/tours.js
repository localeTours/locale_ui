import { tourDb, checkDb} from "./db";


//Edit Tours

export function editTourAndCheckpoint(state){

    tourDb.doc(state.props.tour.currentTourId).update({
        description: state.state.tour.editDescription,
        name: state.state.tour.editTitle
    })
    state.props.checkpoints.editCheckpoints.forEach((checkpoint) => {
        checkDb.doc(checkpoint.id).update({
            latitude: checkpoint.lat,
            longitude: checkpoint.long,
            name: checkpoint.name
        })
    })
}

// Create a New Tour

export function createNewTour(state){

    var startDate = new Date(state.state.startDate).toLocaleDateString();
    var endDate = new Date(state.state.endDate).toLocaleDateString();
    var currentState = state.state;
    var passedProps = state.props;
    var checkIdArr = [];
    //Adding Tours to DB
    tourDb.add({
        name: currentState.tourName,
        description: currentState.tourDescription,
        startDate: startDate,
        endDate: endDate,
        isPrivate: currentState.isPrivate,
        inOrder: currentState.inOrder,
        creator: state.props.account.user.uid
    }).then(function(doc){
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

    }).catch(function(err){
        console.log(err);
    })
}

//Getting all Tours

export function getAllUserTours(state){
        const user = state;
    return new Promise((resolve, reject) => {

        tourDb.where("creator", "==", user.uid).get().then((resp) => {
            var tours = [];
            resp.forEach((tour) => {
                var item = {
                    id: tour.id,
                    tour: tour.data().name
                };
                tours.push(item);
            });
            if(tours){
                return resolve(tours);
            }



        }).catch((err) => {
            console.log(err);
        });
    });
}
