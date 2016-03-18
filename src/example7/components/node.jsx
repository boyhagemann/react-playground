import React from 'react'
import Button from './button'
import Box from './box'
import Link from './link'
import Text from './text'
import App from './app'
import { Route } from 'react-router'

// We need to have all components in a lookup list
const components = { Text, Box, Button, Link, App }

/**
 * Build a tree of React elements
 *
 * @param object node
 * @return React.Element
 */
const nodify = (node) => {

    // Get the values and replace the placeholders with the values from the model
    const values = node.value

    // Get the react component from the list
    const component = components[values['@type']]

    // Build a unique key for React to render properly
    const key = node['@id']

    // Append the properties with node and model data
    const appended = Object.assign({}, values, { node, key })

    // Render the node children and inject the node and model info top down
    let children = node.children && node.children.map( child => nodify(child))

    // This is an important one!
    // We must have our children wrapped in a callback that renders it
    if(node.value['@type'] == 'Page') {
        return <Route {...appended} component={ () => <div>{children}</div> } />
    }

    return React.createElement(component, appended, children)
}

export default nodify
