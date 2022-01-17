import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MainsImage from './mains.png'

function Mains(){
    return (
        <div>
            <Header />
            <img src={MainsImage} className="Menu" alt="Starters" />
            <Footer />
        </div>
    )
}

export default Mains;