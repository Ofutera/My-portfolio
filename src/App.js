import Contact from "./components/contact/Contact";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/Works";
import Portfolio from "./components/portfolio/Portfolio";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import './app.scss'
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  const menuOpenHandler = () => {
    setMenuOpen(!menuOpen)
  }

  const menuCloseHandler = () => {
    setMenuOpen(false);
  }

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={menuOpenHandler}/>
      <Menu menuOpen={menuOpen} setMenuOpen={menuOpenHandler}/>
      <div className="sections">
        <Intro menuClose={menuCloseHandler}/>
        <Portfolio menuClose={menuCloseHandler}/>
        <Works menuClose={menuCloseHandler}/>
        <Testimonials menuClose={menuCloseHandler}/>
        <Contact menuClose={menuCloseHandler}/>
      </div>
    </div>
  );
}

export default App;
