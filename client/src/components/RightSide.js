import React from 'react';
import Friends from './Friends';
import Messages from './Messages';

const RightSide = () => {
    return (
        <div className='right-side'>
            <Friends/>
            <Messages/>
        </div>
    );
};

export default RightSide;