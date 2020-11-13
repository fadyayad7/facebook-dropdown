import React, { useState } from "react";
import { ReactComponent as CogIcon } from "../icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";
import { CSSTransition } from "react-transition-group";

export function NavBar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

export function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

export function DropDownMenu(props) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calculateHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropDownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calculateHeight}
      >
        <div className="menu">
          <DropDownItem>My Profile</DropDownItem>
          <DropDownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calculateHeight}
      >
        <div className="menu">
          <DropDownItem leftIcon={<ArrowIcon />} goToMenu="main" />
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem>Settings</DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
