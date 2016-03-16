import React from 'react';
import { nodify } from './node';

const Collection = React.createClass({

    componentWillMount : function() {
        this.props.loadItems()
    },

    render: function() {
        return <div className={this.props.className}>{this.props.items.map( item => this.props.node.children.map( child => {
            return nodify(child, item)
        })) }</div>
    }
})

export default Collection;