import React from 'react'
import { connect } from 'react-redux'
import { toggle } from '../actions'
import Box from './box'
import Link from './link'
import Text from './text'
import Active from './active'
import Collection from './collection'

import { getItemsFromFirebase } from '../action-creators'

// We need to have all components in a lookup list
const components = { Text, Active, Element, Box, Link, Collection }

/**
 * Build a tree of React elements
 *
 * @param object node
 * @return React.Element
 */
export const nodify = (node, model) => {

    // Get the values and replace the placeholders with the values from the model
    const values = model ? replacePlaceholders(node, model) : node.value

    const mapStateToProps = (state) => {
        return {
            items: state
        }
    }

    const mapDispatchToProps = dispatch => {

        return {
            handleClick: model => dispatch(toggle(model)),
            loadItems: () => dispatch(getItemsFromFirebase())
        }
    }

    // Get the react component from the list
    const component = components[values['@type']]

    // Build a unique key for React to render properly
    const key = node['@id']

    // Append the properties with node and model data
    const appended = Object.assign({}, values, { node, model, key })

    // Render the node children and inject the node and model info top down
    const children = node.children && node.children.map( child => nodify(child, model))

    // Wrap the component in a Redux connected container class
    const connected = connect(mapStateToProps, mapDispatchToProps)(component);

    return React.createElement(connected, appended, children)
}

/**
 *
 * @param node
 * @param model
 * @returns object
 */
export const replacePlaceholders = (node, model) => {

    const values = {}

    Object.keys(node.value).map( key => {

        const value = node.value[key]

        values[key] = String(value);

        Object.keys(model).map(prop => {

            values[key] = values[key].replace('{' + prop + '}', model[prop])
        })
    })

    return values
}

