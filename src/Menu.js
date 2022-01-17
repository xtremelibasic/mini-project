import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function Menu(){
    return (
        <div className="page">
            <Header />
            <button type="button">Starters</button>
            <button type="button">Mains</button>
            <button type="button">Deserts</button>
            <button type="button">Wines</button>
            <Footer />
        </div>
    )
}

export default Menu;