import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <li className="navigation-item active">
                    <Link to="/" className="nav-link active"><i className="fas fa-home"></i> Home</Link>
                </li>
                <li className="navigation-item">
                    <Link to="/notifications" className="nav-link"><i className="fas fa-bell"></i> Notifications</Link>
                    <span className='badge'></span>
                </li>
                <li className="navigation-item">
                    <Link to="/messages" className="nav-link"><i className="fas fa-comments"></i> Messages</Link>
                    <span className='badge'></span>
                </li>
                <li className="navigation-item">
                    <Link to="/friends" className="nav-link"><i className="fas fa-user-friends"></i> Friends</Link>
                </li>
                <li className="navigation-item">
                    <Link to="/groups" className="nav-link"><i className="fas fa-users"></i> Groups</Link>
                </li>
                <li className="navigation-item">
                    <Link to="/pages" className="nav-link"><i className="fas fa-flag"></i> Pages</Link>
                </li>
                <li className="navigation-item">
                    <Link to="/settings" className="nav-link"><i className="fas fa-cog"></i> Settings</Link>
                </li>
                <li className="navigation-item">
                    <Link to="#" className="nav-link"><i className="fas fa-sign-out-alt"></i> Log Out</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;