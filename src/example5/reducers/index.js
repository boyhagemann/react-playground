
const initialState = [
    {label: "First label", description: "A first text"},
    {label: "Second label", description: "A second text"},
    {label: "Third label", description: "A third text"},
]

export function testApp(state = initialState, action) {

    switch (action.type) {

        default:
            return state
    }
}