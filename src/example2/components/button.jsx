import React from 'react';

class Button extends React.Component {

    render() {
        return <a href={this.props.href} className="">{this.props.children}</a>;
    }
}

export default Button;