import React from 'react'
import Button from './button'
import Box from './box'
import Link from './link'
import Text from './text'

// We need to have all components in a lookup list
const components = { Text, Box, Button, Link }

/**
 * Build a tree of React elements
 *
 * @param object node
 * @return React.Element
 */
const nodify = (node) => {

    return React.createElement(
        components[node.value['@type']],
        Object.assign({}, node.value, {key: node['@id']}),
        node.children ? node.children.map( child => nodify(child) ) : []
    )
}

export default nodify
