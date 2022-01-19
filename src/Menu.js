import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function Menu(props){
    
    return (
        <div className="page" >
            <Header goToHomepage={props.menuToHomepage} goToContact={props.menuToContact} goToOrders={props.menuToOrders} />
            <button type="button" className="menu-btn" onClick={props.goToStarters}>Starters</button>
            <button type="button" className="menu-btn" onClick={props.goToMains}>Mains</button>
            <button type="button" className="menu-btn" onClick={props.goToDeserts}>Deserts</button>
            <button type="button" className="menu-btn" onClick={props.goToWines}>Wines</button>
            <Footer />
        </div>
    )
}

export default Menu;