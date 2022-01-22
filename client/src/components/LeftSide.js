import React from 'react';
import Navigation from './Navigation';
import User from './User';

const LeftSide = () => {
    return (
        <div className="left-side">
            <User/>
            <Navigation/>
        </div>
    );
};

export default LeftSide;