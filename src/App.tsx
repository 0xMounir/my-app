import './App.css';
import { Home } from './screens/Home';
import { Ressources } from './screens/Ressources';
import { Contact } from './screens/Contact';
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Accueil</NavLink>
          <br></br>
          <NavLink to="/ressources">Ressources</NavLink>
          <br></br>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/ressources" element={ <Ressources/> }/>
        <Route path="/contact" element={ <Contact/> }/>
      </Routes>
    </div>
  );
}

export default App;
