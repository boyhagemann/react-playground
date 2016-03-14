import React, { PropTypes } from 'react'

const Link = ({ href, className, children, onClick }) =>  {

    return <span
        href={href}
        className={className}
        onClick={onClick}
    >{children}</span>;
}

Link.propTypes = {
    href: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
}

export default Link;