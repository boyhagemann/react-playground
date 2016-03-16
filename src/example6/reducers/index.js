import { TOGGLE, GET_ITEMS_SUCCESS } from '../constants'

const initialState = [
    //{id: 1, label: "First label", description: "A first text", active: true},
    //{id: 2, label: "Second label", description: "A second text", active: true},
    //{id: 3, label: "Third label", description: "A third text", active: true},
]

export function items(models = initialState, action) {

    switch (action.type) {

        case TOGGLE:
            return models.map( model => item(model, action) )

        case GET_ITEMS_SUCCESS:
            Object.keys(action.items).map( key => {
                const item = action.items[key]
                item.id = key
                models = [...models, item]
            })
            return models;

        default:
            return models
    }
}

export function item(model = {}, action) {

    switch (action.type) {

        case TOGGLE:

            if(action.model.id !== model.id) return model;

            return Object.assign({}, model, {
                active: !model.active
            })

        default:
            return model
    }
}