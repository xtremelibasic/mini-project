import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import DesertsImage from './deserts.png'

function Deserts(props){
    return (
        <div>
            <Header />
            <img src={DesertsImage} className="Menu" alt="Deserts" />
            <button type="button" onClick={props.goToStarters}>Starters</button>
            <button type="button" onClick={props.goToMains}>Mains</button>
            <button type="button" className="active">Deserts</button>
            <button type="button" onClick={props.goToWines}>Wines</button>
            <Footer />
        </div>
    )
}

export default Deserts;