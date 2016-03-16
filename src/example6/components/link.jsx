import React, { PropTypes } from 'react'
//import { connect } from 'react-redux'
//import { toggle } from '../actions'

//const mapStateToProps = (state) => {
//    return {
//    }
//}
//const mapDispatchToProps = (dispatch) => {
//    return {
//        handleClick: (model) => dispatch(toggle(model))
//    }
//}


const Link = ({ href, className, children, handleClick, model }) =>  {
    return <span href={href} className={className} onClick={ () => handleClick(model) }>{children}</span>
}

Link.propTypes = {
    href: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    //node: PropTypes.node.isRequired,
}

//const Link = connect(mapStateToProps, mapDispatchToProps)(LinkContainer)

export default Link