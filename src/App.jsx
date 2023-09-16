import './App.css';

import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Profile from './Components/Profile/Profile';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';

function App() {

  return (
    <>
    <Nav/>

    <div className='center'>
      <Profile/>

      <About/>

      <Projects/>

      <Contact/>
    </ div>

    <Footer/>
    </>
  )
}

export default App
