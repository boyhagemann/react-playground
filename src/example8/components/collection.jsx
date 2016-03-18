import React from 'react';
import { nodify } from './node';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        items: state,
        onClick: () => { 'test' }
    }
}

const CollectionContainer = ( { items, node, className } ) => {
    return <div className={className}>{items.map( item => node.children.map( child => {
        return nodify(child, item)
    })) }</div>
}

const Collection = connect(mapStateToProps)(CollectionContainer)

export default Collection;