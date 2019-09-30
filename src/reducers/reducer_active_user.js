import {ACTIVE_USER} from '../actions'

export default function (state={}, action) {
    switch(action.type) {
        case ACTIVE_USER:
            var tempState = action.payload.data;
            return tempState;
        default:
            return state;
    }
}