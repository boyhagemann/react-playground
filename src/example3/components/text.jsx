import React from 'react';

class Text extends React.Component {

    render() {
        return <span>{this.props.text}</span>;
    }
}

export default Text;