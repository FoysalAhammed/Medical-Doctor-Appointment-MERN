import React from "react";
import AboutImg from "../../assets/images/about.png";
import AboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 ">
            <img src={AboutImg} className="" alt="" />
            <div className=" absolute z-20 bottom-4 w-[200px] md:w-[300px] left-[50%] md:left-[47%] lg:left-[45%]">
              <img src={AboutCardImg} alt="" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 capitalize">
            <h2 className="heading ">
            Proud to be one of the nations best
            </h2>
            <p className="text_pera">
              our best is something we strive for each day,caring for our
              patintes-not looking back at what we accomplished but towards what
              w can do tomowwro. providing the best . Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Voluptatum eligendi eaque ad
              debitis tempore deserunt.
            </p>
            <p className="text_pera mt-[30px]">
              our best is something we strive for each day,caring for our
              patintes-not looking back at what we accomplished but towards what
              w can do tomowwro. providing the best . Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Voluptatum eligendi eaque ad
              debitis tempore deserunt.
            </p>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
