import React, { PropTypes } from 'react'

const Link = ({ href, className, children }) =>  {
    return <a href={href} className={className}>{children}</a>
}

Link.propTypes = {
    href: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    //node: PropTypes.node.isRequired,
}


export default Link