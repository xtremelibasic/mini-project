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
        customerOrder.concat("Autumn Salad");
        setcustomerOrder(customerOrder);
        console.log(addAutumnSalad)
    }

    function addRavioli (){
        customerOrder.concat("Ravioli");
        setcustomerOrder(customerOrder);

    }

    function addScallopsfromtheIsleofSkye (){
        customerOrder.concat("Scallops From The IsleofSkye");
        setcustomerOrder(customerOrder);

    }
    function addRoastVealSweetBread (){
        customerOrder.concat("Roast Veal Sweetbread");
        setcustomerOrder(customerOrder);

    }
//Amanda here is what i have done on the home page , could you comment on where or what add on other components,as i dont want create another components
//     Autumn salad
// Ravioli
// Scallops from the Isle of Skye
// Roast veal sweetbread
    return (
        <div className="page" >
            <Header goToMenu={props.homepageToMenu} goToContact={props.homepageToContact} goToOrders={props.homepageToOrders} />
            <div className="main">
            <img src={Starters} className="Menu" alt="Starters" />
            <button type="addAutumnSaladBtn" onClick={addAutumnSalad}>Add To Order</button>
            
            <button  type="addRavioliBtn" onClick={addRavioli}>Add To Order</button>
            <button type="addScallopsfromtheIsleofSkyeBtn"onClick={addScallopsfromtheIsleofSkye}>Add To Order</button>
            <button type="buttonBtn"onClick={addRoastVealSweetBread}>Add To Order</button>

            </div>
            <Footer />
        </div>
    )
}

export default Homepage;