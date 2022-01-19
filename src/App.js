import React, {useState} from 'react';
import './App.css';
import Orders from './Orders';
import Menu from './Menu';
import Homepage from './Homepage';
import Contact from './Contact';
import Starters from './Starters';
import Mains from './Mains';
import Deserts from './Deserts';
import Wines from './Wines';

function App() {
  const [translateUnits, setTranslateUnits] = useState("");

  function goMenu(){
    setTranslateUnits("-100vw");
    return translateUnits;
  }
  function goContact(){
    setTranslateUnits("-200vw");
    return translateUnits;
  }

  function goOrders(){
    setTranslateUnits("-300vw");
    return translateUnits;
  }

  function goStarters(){
    setTranslateUnits("-400vw")
  }

  function goMains(){
    setTranslateUnits("-515vw")
  }

  function goDeserts(){
    setTranslateUnits("-630vw")
  }

  function goWines(){
    setTranslateUnits("-745vw")
  }

  function goHomepage(){
    setTranslateUnits("0vw")
  }
 

  return (
    <div className="App">
      <div className="allPages" style={{transform:`translate(${translateUnits}, ${0}px)`,transition:"transform .6s ease-in"}} id="allPages">
          <Homepage homepageToMenu={goMenu} homepageToContact={goContact} homepageToOrders={goOrders} />
          <Menu goToStarters={goStarters} goToMains={goMains} goToDeserts={goDeserts} goToWines={goWines} menuToHomepage={goHomepage} menuToContact={goContact} menuToOrders={goOrders} />
          <Contact contactToMenu={goMenu} contactToHomepage={goHomepage} contactToOrders={goOrders}/>
          <Orders  ordersToMenu={goMenu} ordersToContact={goContact} ordersToHomepage={goHomepage}/>
          {/* reusing the the "go to menu", "go to contact" and "go to Homepage" from orders and the "go to orders" from contact here */}
          <Starters startersToMenu={goMenu} startersToContact={goContact} startersToOrders={goOrders} startersToHomepage={goHomepage} goToMains={goMains} goToDeserts={goDeserts} goToWines={goWines}/>
          <Mains goToStarters={goStarters} goToDeserts={goDeserts} goToWines={goWines} />
          <Deserts goToMains={goMains} goToStarters={goStarters} goToWines={goWines}/>
          <Wines goToMains={goMains} goToDeserts={goDeserts} goToStarters={goStarters}/>
        </div>
      </div>
  );
}

export default App;
