
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Labs from './components/Labs';
import About from './components/About';
import Support from './components/Support';
import MainHeader from './components/MainHeader';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">

    <nav>

      <ul>

        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/support">Support</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/labs">Labs</NavLink>
        </li>

      </ul>
    </nav>
