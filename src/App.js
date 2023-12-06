
import './App.css';
import Navbar from './components/NavBar';
import Home from './components/home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
