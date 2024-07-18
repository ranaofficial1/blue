import React from "react";
import minchIcon from ".././assets/Minch Icon.png";
import infity from '../assets/infinity.png'
import posterData from '../data/homepage'

const Home = () => {

  return (
    <>
      <div className="container">
         <div className="d-flex justify-content-between align-items-center contentheigth-1 countcontainer">
             <div className="imgContentCount">
               <img src={minchIcon} className="img-fluid logoimg" alt="Logo" />
                <div className="fontSize-3 ms-5 fw-bold pt-4">
                  <span>Siliguri’s</span> <br />
                  <span>Largest Digital</span> <br />
                  <span>Marketing Agency</span>
                </div>
             </div>
               <div className="row align-items-center fontSize-4 gap-2 count">
                <span className="col-md-3"><strong>50+</strong> CLIENTS</span> 
                <span className="col-md-3"><strong>200+</strong> PROJECTS</span> 
                <span className="col-md-3"><strong>40+</strong> MINCHES</span>
                <span className="col-md-3"><img src={infity} alt="" width={35}/>&nbsp; ENERGY</span>
               </div>
         </div>
      </div>
      {/* poster */}
      <div className="cardBg">
        <div className="container">
          <div className="row pt-133" style={{height: "639px"}}>
            {posterData &&
              posterData.map((ele, ind) => {
                return <PosterPage ele={ele} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

function PosterPage({ ele }) {
  return (
    <>
      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
        <div class="card border-0" style={{width: "25rem"}}>
          <img src={ele?.image} class="card-img-top" alt="pic" />
          <div className="card-heading-bg">
            <p className="fontSize-3 fw-semibold text-center card-heading">{ele?.heading}</p>
          </div>
          <div class="card-body bg-blue">
            <p class="text-white pt-4">{ele?.content}</p>
            <div className="text-center mt-5">
            <a href="#" class="btn btn-primary text-white text-center">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  
  );
}
