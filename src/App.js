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
  return (
    <div className="App">
      <div className="primary-pages">
        <Homepage />
        <Menu />
        <Contact />
        <Orders />
      </div>
      <div className="secondary-pages">
        <Starters />
        <Mains />
        <Deserts />
        <Wines />
      </div>
    </div>
  );
}

export default App;
