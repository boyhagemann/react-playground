import { toggle, TOGGLE } from '../actions'

const initialState = {
    active: false,
}

export function testApp(state = initialState, action) {
    switch (action.type) {

        case TOGGLE:
            return Object.assign({}, state, {
                active: !state.active,
            })

        default:
            return state
    }
}