import React from 'react';

const Active = ( { active = true } ) => {
    return <div>{ active == 'true' ? 'Yes' : 'No' }</div>
}

export default Active;