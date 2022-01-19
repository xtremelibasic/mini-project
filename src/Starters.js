import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import StartersImage from './starters.png'

function Starters(props){
    return (
        <div>
            <Header  goToMenu={props.startersToMenu} goToContact={props.startersToContact} goToOrders={props.startersToOrders} goToHomepage={props.startersToHomepage}/>
            <img src={StartersImage} className="Menu" alt="Starters" />
            <button type="button" className="active">Starters</button>
            <button type="button" onClick={props.goToMains}>Mains</button>
            <button type="button" onClick={props.goToDeserts}>Deserts</button>
            <button type="button" onClick={props.goToWines}>Wines</button>
            <Footer />
        </div>
    )
}

export default Starters;