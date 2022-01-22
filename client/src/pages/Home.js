import React from 'react';

const Home = () => {
    return (
        <div className='main'>
            <div className="searchbar">
                <input type="text" placeholder='Search...'/>
                <i className="fas fa-search"></i>
            </div>
            <div className="stories">
                <div className="cards">
                    <div className="card">
                        <div className="friend-picture-story">
                            <img src="./src/img/user/didier_petou.jpg"/>
                            <span></span>
                        </div>
                        <button className="btn btn-add"><i className="fas fa-plus"></i></button>
                        <span className="add-story">Add Story</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;