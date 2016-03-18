import React from 'react';

const Text = ( { type = 'span', className, text } ) => {
    return React.createElement(type, {className}, text)
}

export default Text;