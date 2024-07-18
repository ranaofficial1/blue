import React, { useEffect, useState } from "react";
import logo from "../assets/Blue Minch logo.png";
import '../assets/css/Header.css';

const navList = [
  { class: "Home", class1: "HomeOpt", title: "Home", link: "/" },
  { class: "Legend", class1: "LegendOpt", title: "Legend", link: "/Legend" },
  { class: "About", class1: "AboutOpt", title: "About", link: "/About" },
  { class: "Services", class1: "ServicesOpt", title: "Services", link: "/Services", dropdown: [
    { title: "Service 1", link: "/Service1" },
    { title: "Service 2", link: "/Service2" },
    { title: "Service 3", link: "/Service3" }
  ]},
  { class: "Projects", class1: "ProjectsOpt", title: "Projects", link: "/Projects", dropdown: [
    { title: "Project 1", link: "/Project1" },
    { title: "Project 2", link: "/Project2" },
    { title: "Project 3", link: "/Project3" }
  ]},
  { class: "Clients", class1: "ClientsOpt", title: "Clients", link: "/Clients" },
  { class: "People", class1: "PeopleOpt", title: "People", link: "/People" },
  { class: "Training", class1: "TrainingOpt", title: "Training", link: "/Training" },
  { class: "Contact", class1: "ContactOpt", title: "Contact", link: "/Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar')) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="container pt-nav">
      <nav className="navbar rounded-pill">
        <div className="d-flex justify-content-between align-items-center w-full">
          <div className="logo2">
            <img src={logo} alt="logo" />
          </div>
          <button className="navbar-toggler" onClick={toggleNavbar}>
            ☰
          </button>
          <ul className={`list-inline d-flex gap-4 mb-0 navItems ${isOpen ? "open" : ""}`}>
            {navList.map((item, index) => (
              <li key={item.title} className="nav-item">
                <a href={item.link} className={item.class1}>
                  {item.title}
                </a>
                {item.dropdown && (
                  <ul className="dropdown-menu">
                    {item.dropdown.map((dropdownItem) => (
                      <li key={dropdownItem.title}>
                        <a href={dropdownItem.link}>{dropdownItem.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
