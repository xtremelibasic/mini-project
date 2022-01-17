import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import WinesImage from './wines.png'

function Wines(){
    return (
        <div>
            <Header />
            <img src={WinesImage} className="Menu" alt="Wines" />
            <Footer />
        </div>
    )
}

export default Wines;