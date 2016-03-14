import React from 'react';

class Box extends React.Component {

    render() {
        return <div className={this.props.class}>{this.props.children}</div>;
    }
}

export default Box;