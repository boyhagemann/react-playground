import React, { PropTypes } from 'react'
import { Link as InternalLink } from 'react-router'

const Link = ({ to, className, text }) =>  {

    return <InternalLink
        to={to}
        className={className}
    >{text}</InternalLink>;
}

export default Link;