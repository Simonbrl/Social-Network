import React from 'react';
import ProfilePicture from 'img/100x100/didier_petou.jpg'

const User = () => {
    return (
        <div className='user-info'>
            <div className="user-picture">
                <img src={ProfilePicture}/>
            </div>
            <div className="user-name">
                <strong>Didier Pétou</strong>
                <span>@didier_petou</span>
            </div>
        </div>
    );
};

export default User;