import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Starters from './starters.png'

function Homepage(){
    return (
        <div className="page">
            <Header />
            <img src={Starters} className="Menu" alt="Starters" />
            <Footer />
        </div>
    )
}

export default Homepage;