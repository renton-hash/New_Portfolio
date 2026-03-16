import React, { useState } from 'react';
import { ScreenLoad } from './Components/Sections/ScreenLoad';
import { Navbar } from './Components/Navbar';
import {MenuMobie} from './Components/MenuMobie';
import {Home} from './Components/Sections/Home';
import { About } from './Components/Sections/About';
import { Projects} from './Components/Sections/Projects';
import { Contact } from './Components/Sections/Contact';
import "./index.css";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [OpenMenu, setOpenMenu] = useState(false);

  return (
    <>
      {!isLoaded && <ScreenLoad onComplete={() => setIsLoaded(true)} />}
      {isLoaded && (
        <div className={`transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
          <Navbar OpenMenu={OpenMenu} setOpenMenu={setOpenMenu} />
          <MenuMobie OpenMenu={OpenMenu} setOpenMenu={setOpenMenu} />
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      )}
    </>
  );
};
export default App;
