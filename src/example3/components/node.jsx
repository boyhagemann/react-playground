import React from 'react'
import Link from './link'
import Text from './text'

import { createStore } from 'redux'
import { toggle } from '../actions'
import { testApp } from '../reducers'


const store = createStore(testApp)
const actions = { toggle }
const components = { Node, Text, Link }

// Just log for testing
store.subscribe(() =>
    console.log(store.getState())
)


class Node extends React.Component {

    render() {

        // Convert events to props
        let events = {}
        this.props.events ? this.props.events.map(function(event) {
            const action = actions[event.action];
            events[event.type] = () => { store.dispatch(action()) }
        }) : {};


        return React.createElement(

            // Lookup the type based on its string (kind of hack)
            components[this.props['@type']],

            // Pass thru the properties of this component
            Object.assign({}, this.props, events),

            // If there are children, nest them inside the components
            this.props.children ? this.props.children.map(function(node) {

                // No value? Then there is nothing to render
                if(!node.value) return;

                // Give every node element a react key, prevents warnings
                const value = Object.assign({}, node.value, { key: node['@id'] });

                // Return a new node component for all children
                return React.createElement(Node, value, node.children);

            }) : null // No children, no rendering
        );

    }
}

export default Node;