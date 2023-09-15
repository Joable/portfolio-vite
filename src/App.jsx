import './App.css';

import About from './Components/About/About';
import Profile from './Components/Profile/Profile';
import Projects from './Components/Projects/Projects';

function App() {

  return (
    <div className='center'>
      <Profile/>

      <About/>

      <Projects/>
    </ div>
  )
}

export default App
