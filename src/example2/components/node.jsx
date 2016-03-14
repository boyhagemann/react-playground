import React from 'react';
import Button from './button';
import Box from './box';
import Link from './link';
import Text from './text';

const components = { Node, Text, Box, Button, Link };

class Node extends React.Component {

    render() {

        return React.createElement(

            // Lookup the type based on its string (kind of hack)
            components[this.props['@type']],

            // Pass thru the properties of this component
            this.props,

            // If there are children, nest them inside the components
            this.props.children ? this.props.children.map(function(node) {

                // No value? Then there is nothing to render
                if(!node.value) return;

                // Give every node element a react key, prevents warnings
                const value = Object.assign(node.value, {key: node['@id']});

                // Return a new node component for all children
                return React.createElement(Node, value, node.children);

            }) : null // No children, no rendering
        );

    }
}

export default Node;