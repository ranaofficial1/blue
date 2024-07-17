import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/Blue Minch logo.png";
// import { Link } from "react-router-dom";
import '../assets/css/Header.css'
import HeroContent from "./HeroContent";

const navList = [
  
  { class: "Home", class1: "HomeOpt", title: "Home", link: "/" },
  { class: "Legend", class1: "LegendOpt", title: "Legend", link: "/Legend" },
  { class: "About", class1: "AboutOpt", title: "About", link: "/About" },
  {
    class: "Services",
    class1: "ServicesOpt",
    title: "Services",
    link: "/Services",
  },
  {
    class: "Projects",
    class1: "ProjectsOpt",
    title: "Projects",
    link: "/Projects",
  },
  {
    class: "CLients",
    class1: "CLientsOpt",
    title: "Clients",
    link: "/Clients",
  },
  { class: "People", class1: "PeopleOpt", title: "People", link: "/People" },
  {
    class: "Training",
    class1: "TrainingOpt",
    title: "Training",
    link: "/Training",
  },
  {
    class: "Contact",
    class1: "ContactOpt",
    title: "Contact",
    link: "/Contact",
  },
];

const Header = () => {
  // const location = useLocation();
  // const path = location.pathname;
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  const handleOutsideClick = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        handleOutsideClick();
      } 
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // const navListItems = navList.map((item) => (
  //   <li>
  //     <a href={item.link} className={item.class1}>
  //       {item.title}
  //     </a>
  //   </li>
  // ));

  return (
    <>
      <div className="container pt-nav">
        <nav className="navbar rounded-pill">
          <div className="d-flex justify-content-between align-items-center w-full">
            <div className="logo2">
              <img src={logo} alt="" />
            </div>
            <ul className="list-inline d-flex gap-4 mb-0 navItems">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Legend</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li><a href="">Clients</a></li>
              <li><a href="">People</a></li>
              <li><a href="">Training</a></li>
              <li><a href="">Contact</a></li>
            </ul>

          
          </div>
        </nav>
      </div>  
      <HeroContent />
    </>
    
  );
};




export default Header;
