import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Starters from './starters.png'

function Homepage(props){
    
    return (
        <div className="page" >
            <Header goToMenu={props.homepageToMenu} goToContact={props.homepageToContact} goToOrders={props.homepageToOrders} />
            <div className="main">
            <img src={Starters} className="Menu" alt="Starters" />
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;