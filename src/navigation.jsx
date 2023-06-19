import { useRef } from "react";
import Search from "./components/search";
import { sidetray } from "./components/sidebar";

function Navigation() {
  const mobilenav = useRef();

  const openSide = () => {
    sidetray.current.classList.add("open");
    document.querySelector("[data-side]").setAttribute("aria-expanded", true);
  };

  const openMobileNav = () => {
    mobilenav.current.setAttribute("data-nav", true);
  };

  return (
    <div className="top-navigation">
      <div className="nav-logo">
        <img
          src="https://images.pexels.com/photos/16666915/pexels-photo-16666915.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt="Portfolio Logo"
        />
      </div>
      <div className="navigation">
        <ul className="nav">
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="#">My mission</a>
            <div className="submenu">
              <ul className="dropdown">
                <li>
                  <a href="/it/networking">Networking</a>
                </li>
                <li>
                  <a href="/it/cloud">Cloud</a>
                </li>
                <li>
                  <a href="/it/experience">My Experience</a>
                </li>
              </ul>
            </div>
          </li>
          <Search />
          <li>
            <a href="#" data-side onClick={openSide}>
              Accessibillity
            </a>
          </li>
        </ul>
        <div className="hamburger">
          <button onClick={openMobileNav}>=</button>
          <div className="mobile-nav" ref={mobilenav}></div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
