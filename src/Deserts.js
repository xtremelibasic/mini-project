import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import DesertsImage from './deserts.png'

function Deserts(){
    return (
        <div>
            <Header />
            <img src={DesertsImage} className="Menu" alt="Deserts" />
            <Footer />
        </div>
    )
}

export default Deserts;