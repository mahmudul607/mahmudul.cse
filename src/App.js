
import { useEffect, useState } from 'react';
import './App.css';
import AboutMe from './Component/AboutMe/AboutMe';
import ColorItem from './Component/Color-item';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Passion from './Component/Passion/Passion';






function App() {
  const colors = ['#2d3436', '#4834d4', '#be2edd', '#f9ca24', '#6ab04c', '#30336b', 'red']

  const [state, setState] = useState(false)

  useEffect(() => {

    const currentColor = localStorage.getItem('color');
    setTheme(currentColor)

  }, [])
  const setTheme = (color) => {
    document.documentElement.style.setProperty('--bg-color', color)
  }
  const setColor = (event) => {
    const currentColor = event.target.style.getPropertyValue('--bg-color');
    setTheme(currentColor);
    localStorage.setItem('color', currentColor);

  }
 
  // others
  const handleNavClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

 
  
 
 


  return (
    <div className='App'>
      <div className='main-area'>
        <div className='header-area'>
          <Header handleNavClick={handleNavClick}></Header>

        </div>
        <div className='body-content'>
          <div id='sec-1' className='section'>
          <Home handleNavClick={handleNavClick}></Home>
          </div>
          <div id='sec-2'  className='section'>
          <AboutMe></AboutMe>
          </div>
          <div id='sec-3'  className='section'>
          <Passion></Passion>
          </div>
          <div id='sec-4'  className='section'>
          
          </div>
          
          
          
         
        </div>
         {/* color changer */}
         <div className={`color-switcher ${state && 'color-switcher--open'}`}>
            <button onClick={() => setState(prevState => !prevState)}><i className="ri-settings-2-line"></i></button>
            <h1 className='heading'>Select Color</h1>
            <div className='color-list'>
              {
                colors.map((color, idx) => <ColorItem key={idx} setColor={setColor} color={color}></ColorItem>)
              }

            </div>
          </div>
          {/* end color changer */}

      </div>



    </div>
  );
}

export default App;
