import {tourDb} from '../services/db';

export const getTours = (userId) => {
  return (dispatch) => {
    var tours = []
    tourDb.where("creator", "==", userId).get().then((resp) => {
        resp.forEach((tour) => {
            var item = {
                id: tour.id,
                tour: tour.data().name
            };
            tours.push(item);
        });
        dispatch({
          type: 'GET_TOURS',
          payload: tours
        })
    }).catch((err) => {
        console.log(err);
    });
  }
}

export const signIn = (payload) => {
  return {
      type: 'SIGN_IN',
      payload: payload
  }
}


export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}
