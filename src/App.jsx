import { Contact } from "./components/contact/Contact";
import { Intro } from "./components/intro/Intro";
import { Portafolio } from "./components/portafolio/Portafolio";
import { Topbar } from "./components/topbar/Topbar";
import { Work } from "./components/work/Work";
import { Menu } from "./components/menu/Menu";
import { useState } from "react";

import './app.scss'

function App() {

  const [menuOpen, setMenuOpne] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={ menuOpen } setMenuOpne={ setMenuOpne }/>
      <Menu menuOpen={ menuOpen } setMenuOpne={ setMenuOpne }/>
      <div className="sections">
        <Intro/>
        <Portafolio/>
        <Work/>
        <Contact/> 
      </div>
    </div>
  );
}

export default App;
