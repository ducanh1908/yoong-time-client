import React from 'react';

import TopBar from '../../components/TopBar/TopBar';
import Sidebar from '../../components/SideBar/SideBar';
import './home.css'
Home.propTypes = {
    
};

function Home(props) {
    return (
        <>
            <TopBar />
            <div className="homeContainer">
            <Sidebar />
            
            </div>
        </>
    );
}

export default Home;