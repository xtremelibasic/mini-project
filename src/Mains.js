import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MainsImage from './mains.png'

function Mains(props){
    return (
        <div>
            <Header />
            <img src={MainsImage} className="Menu" alt="Starters" />
            <button type="button"  onClick={props.goToStarters}>Starters</button>
            <button type="button" className="active">Mains</button>
            <button type="button" onClick={props.goToDeserts}>Deserts</button>
            <button type="button" onClick={props.goToWines}>Wines</button>
            <Footer />
        </div>
    )
}

export default Mains;