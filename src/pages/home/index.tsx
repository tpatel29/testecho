import React from 'react';
import '../../styles/home-styles.css';
import '../../styles/sideTickers.css';

import  Jumbo from './jumbo';
import  Navbar from './navbar';

export default function Home() {
    return (
        <div id={"mainDiv"}>
            <Navbar/>
            <br/><br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <Jumbo />
        </div>
    )
}
