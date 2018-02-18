import {  FETCH_MEDIAS } from '../actions/media';

export default function(state = {}, action) {
    switch (action.type) {
    case FETCH_MEDIAS:
        return action.payload.data.resources;
    default:
        return state;
    }
}
