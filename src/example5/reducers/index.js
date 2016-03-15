import { TOGGLE } from '../actions'

const initialState = [
    {id: 1, label: "First label", description: "A first text", active: true},
    {id: 2, label: "Second label", description: "A second text", active: true},
    {id: 3, label: "Third label", description: "A third text", active: true},
]

export function testModels(models = initialState, action) {

    switch (action.type) {

        case TOGGLE:
            return models.map( model => testModel(model, action) )

        default:
            return models
    }
}

export function testModel(model = {}, action) {

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