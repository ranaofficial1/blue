import React from "react";
import '../assets/css/Home.css'
import homepos1 from ".././assets/homepos1.jpg";
import { posterData, posterPoem } from "../data/homepage";
import poemimg from ".././assets/poemimg.png";
import minchIcon from ".././assets/Minch Icon.png";
import homepos2 from '../assets/homepos2.jpg'
import homepos3 from '../assets/homepos3.jpg'
import infity from '../assets/infinity.png'
import { Link } from "react-router-dom";

const navList = [
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
    title: "CLients",
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

const Home = () => {
  return (
    <>
      <div className="container">
         <div className="d-flex justify-content-between align-items-center h-1">
             <div className="img d-flex">
               <img src={minchIcon} className="img-fluid logoimg" alt="Logo" />
                <div className="fontSize-3 ms-5 fw-bold pt-4">
                  <span>Siliguri’s</span> <br />
                  <span>Largest Digital</span> <br />
                  <span>Marketing Agency</span>
                </div>
             </div>
             <div className="count">
               <ul className="list-inline d-flex align-items-center fontSize-4 gap-4">
                <li><span className="fw-bold">50+</span> CLIENTS</li>
                <li><span className="fw-bold">200+</span> PROJECTS</li>
                <li><span className="fw-bold">40+</span>MINCHES</li>
                <li>
                  <img src={infity} alt="" width={35}/>&nbsp; ENERGY
                </li>
               </ul>
             </div>
         </div>
      </div>
      {/* /card */}
      <div className="cardBg">
        <div className="container">
            <div className="row pt-133" style={{height: "639px"}}>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div class="card border-0" style={{width: "25rem"}}>
                  <img src={homepos2} class="card-img-top" alt="..." />
                  <div className="card-heading-bg">
                    <p className="fontSize-3 fw-semibold text-center card-heading">The Legendary Blue Men of Minch </p>
                  </div>
                  
                  <div class="card-body bg-blue">
                    {/* <h5 class="card-title">The Legendary Blue Men of Minch </h5> */}
                    <p class="text-white pt-4">In Scottish lore, the Blue Men of Minch are mythical people who live below the waves. They have great strength, blue skin, and the ability to swim like fish through the roughest seas. Their magical powers include summoning storms and sometimes changing form. They speak in rhymes. and create enchanting music that is hard to resist.</p>
                    <div className="text-center mt-5">
                    <a href="#" class="btn btn-primary text-white text-center">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* second card */}
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div class="card border-0" style={{width: "25rem"}}>
                  <img src={homepos1} class="card-img-top" alt="..." />
                  <div className="card-heading-bg">
                    <p className="fontSize-3 fw-semibold text-center card-heading">The Legendary Blue Men of Minch </p>
                  </div>
                  
                  <div class="card-body bg-blue">
                    {/* <h5 class="card-title">The Legendary Blue Men of Minch </h5> */}
                    <p class="text-white pt-4">In Scottish lore, the Blue Men of Minch are mythical people who live below the waves. They have great strength, blue skin, and the ability to swim like fish through the roughest seas. Their magical powers include summoning storms and sometimes changing form. They speak in rhymes. and create enchanting music that is hard to resist.</p>
                    <div className="text-center mt-5">
                    <a href="#" class="btn btn-primary text-white text-center">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* third card */}
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div class="card border-0" style={{width: "25rem"}}>
                  <img src={homepos3} class="card-img-top" alt="..." />
                  <div className="card-heading-bg">
                    <p className="fontSize-3 fw-semibold text-center card-heading">The Legendary Blue Men of Minch </p>
                  </div>
                  
                  <div class="card-body bg-blue">
                    {/* <h5 class="card-title">The Legendary Blue Men of Minch </h5> */}
                    <p class="text-white pt-4">In Scottish lore, the Blue Men of Minch are mythical people who live below the waves. They have great strength, blue skin, and the ability to swim like fish through the roughest seas. Their magical powers include summoning storms and sometimes changing form. They speak in rhymes. and create enchanting music that is hard to resist.</p>
                    <div className="text-center mt-5">
                    <a href="#" class="btn btn-primary text-white text-center">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
