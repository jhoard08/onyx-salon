import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './nav';
import LandingPage from './landing';

const nav = document.querySelector('#content');
const head = LandingPage();



nav.innerHTML = Navbar();
nav.appendChild(head.header());
nav.appendChild(head.meetUs());


