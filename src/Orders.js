import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import OrderList from './components/OrderList';
function Orders(props){
    return (
        <div className="page">
            <Header goToMenu={props.ordersToMenu} goToContact={props.ordersToContact} goToHomepage={props.ordersToHomepage}/>
            <OrderList/>
            <Footer />
            <div>
                </div>
        </div>
    )
}

export default Orders;