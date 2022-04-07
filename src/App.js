import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Programs from './components/Programs';
import Topstories from './components/Topstories';

function App() {
  return (
    <div className='App'>
     

    <Header/>
    <Navbar/>
    <Home/>
    <About/>
    <Programs/>
    <Topstories/>
    <Contact/>
    
    </div>
    
  );
}

export default App;
