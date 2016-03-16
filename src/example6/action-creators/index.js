import { GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE } from '../constants'
import Firebase from 'Firebase'

export const getItemsFromFirebase = () => {

    const ref = new Firebase('https://scorching-heat-3548.firebaseio.com/items');

    return dispatch => {

        dispatch({ type: GET_ITEMS_REQUEST })

        ref.on('value', snapshot => dispatch({
            type: GET_ITEMS_SUCCESS,
            items: snapshot.val()
        }), error => {
            type: GET_ITEMS_FAILURE,
            error
        })
    }
}