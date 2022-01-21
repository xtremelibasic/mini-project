import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Starters from './starters.png'
import {useState} from "react";
import react from 'react';
function Homepage(props){

    const [customerOrder, setcustomerOrder] = useState([]);
    function addAutumnSalad (){
        customerOrder.concat("Autumn Salad")
    }

//     Autumn salad
// Ravioli
// Scallops from the Isle of Skye
// Roast veal sweetbread
    return (
        <div className="page" >
            <Header goToMenu={props.homepageToMenu} goToContact={props.homepageToContact} goToOrders={props.homepageToOrders} />
            <div className="main">
            <img src={Starters} className="Menu" alt="Starters" />
            <button type="button" onClick={addAutumnSalad}>Add To Order</button>
            
            <button  type="button">Add To Order</button>
            <button type="button">Add To Order</button>
            <button type="button">Add To Order</button>

            </div>
            <Footer />
        </div>
    )
}

export default Homepage;