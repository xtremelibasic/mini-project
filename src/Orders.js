import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function Orders(props){
    return (
        <div className="page">
            <Header goToMenu={props.ordersToMenu} goToContact={props.ordersToContact} goToHomepage={props.ordersToHomepage}/>
            <Footer />
        </div>
    )
}

export default Orders;