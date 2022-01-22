import React, {useEffect, useState} from 'react';
import usersData from 'data/users.json';

const Friends = () => {
    return (
        <div className='panel friends'>
            <div className="panel-title">
                <strong>Friends</strong>
            </div>
            <div className="panel-content">
                <ul>
                    {usersData.map((user) => (
                        <li key={user.id.value}>
                            <div className="friend-item">
                                <div className="friend-picture">
                                    <img src={user.picture.thumbnail}/>
                                    <span className="active"></span>
                                </div>    
                                <div className="friend-name">{user.name.first} {user.name.last}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Friends;