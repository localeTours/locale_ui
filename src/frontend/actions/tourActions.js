import {tourDb, checkDb} from '../services/db';

export const createTour = ({tour, checkpoints}) => {
  return (dispatch) => {
    var checkIdArr = [];
    var tourName = tour.name;
    var tourId;
    //Adding Tours to DB
    tourDb.add(tour).then((doc) => {
      tourId = doc.id
      var tourDoc = tourDb.doc(tourId)
      checkpoints.forEach((check, i) => {
        checkDb.add({
            name: check.checkpointName,
            longitude: check.long,
            latitude: check.lat,
            tour: doc.id
        }).then((checkDoc) => {
          checkIdArr.push({checkpoint: checkDoc.id})
          tourDoc.update({checkpoints: checkIdArr})
        })
        .catch((err) => {
          console.log(err)
        })
      })
      dispatch({
        type: 'ADD_TOUR',
        payload: {id: tourId, tour: tourName}
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

export const selectTourAndCheckpoints = (tourId) => {
  return (dispatch) => {
    tourDb.doc(tourId).get().then((resp) => {
        var tour = resp.data();
        var checkpoints = []
        dispatch({
          type: 'SELECT_TOUR',
          payload: {currentTour: tour, currentTourId: resp.id}
        })
        tour.checkpoints.forEach(c => {
            checkDb.doc(c.checkpoint).get().then((resp) => {
              var checkpnt = resp.data();
              var checkpoint = {
                id: resp.id,
                lat: checkpnt.latitude,
                long: checkpnt.longitude,
                name: checkpnt.name
              }
              dispatch({
                type: 'SELECT_CHECKPOINT',
                payload: checkpoint
              })
            }).catch((err) => {
                console.log(err);
            })
        });
    }).catch((err) => {
        console.log(err);
    });
  }
}

export const selectTour = (tourAndTourId) => {
  debugger;
  return  {
    type: 'SELECT_TOUR',
    payload: tourAndTourId
  }
}

export const updateTour = (editedTour) => {
  return {
    type: 'UPDATE_TOUR',
    payload: editedTour
  }
}

export const updateCreateTour = (updateInfo) => {
  return {
    type: "UPDATE_CREATE_TOUR",
    payload: updateInfo
  }
}
