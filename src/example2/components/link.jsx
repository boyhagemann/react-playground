import React, { PropTypes } from 'react'

class Link extends React.Component {

    render() {
        return <a
            href={this.props.href}
            className={this.props.class}
            onClick={() => {
                dispatch(toggle(this.props.href))
            }}
        >{this.props.children}</a>;
    }
}

export default Link;