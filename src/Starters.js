import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import StartersImage from './starters.png'

function Starters(){
    return (
        <div>
            <Header />
            <img src={StartersImage} className="Menu" alt="Starters" />
            <Footer />
        </div>
    )
}

export default Starters;