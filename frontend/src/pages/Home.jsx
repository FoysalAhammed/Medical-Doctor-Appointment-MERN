
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import featuringImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";
const Home = () => {
  return (
    <>
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[600] md:text-[60px] md:leading-[70px]">
                  We Help Patients Live A Healthy Longer Life.
                </h1>
                <p className="text_pera">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Blanditiis laudantium delectus, nihil eius tenetur ipsa quae
                  veritatis, velit ducimus cupiditate reprehenderit numquam.
                  Voluptatibus aperiam optio cupiditate dolorum excepturi ea
                </p>
                <button className="btn">Request an Appointment </button>
              </div>
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[600] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_pera">Years Of Experience </p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[600] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_pera">Clinical Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[600] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-[#008035] rounded-full block mt-[-14px]"></span>
                  <p className="text_pera">Patient Satisfaction </p>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px] justify-end">
              <div className="">
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text-pera text-center">
              world-Class Care For Everyone.Our Health Systems Offers unmatched
              expert Health Care
            </p>
          </div>
          <DoctorList/>
        </div>
      </section>
          
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing The Best Medical Services
            </h2>
            <p className="text_pera text-center capitalize">
              world Class Care For Everyone.Our Health Systems Offers unmatched
              expert Health Care
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[600] text-center">
                  Find A Dctor
                </h2>
                <p className="text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center capitalize">
                  world-class care for Everyone.our Health Systems Offers
                  unmatched,expert Health care.romt the lab to the Clinic
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[600] text-center">
                  Find Location
                </h2>
                <p className="text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center capitalize">
                  world-class care for Everyone.our Health Systems Offers
                  unmatched,expert Health care.romt the lab to the Clinic
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[600] text-center">
                  Book An Appointmentr
                </h2>
                <p className="text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center capitalize">
                  world-class care for Everyone.our Health Systems Offers
                  unmatched,expert Health care.romt the lab to the Clinic
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text-pera text-center">
              world-Class Care For Everyone.Our Health Systems Offers unmatched
              expert Health Care
            </p>
          </div>
          <ServiceList />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">Get Virtual Tratment</h2>
              <ul className="pl-4">
                <li className="text_pera">
                  1.scheduled the appontment directyly
                </li>
                <li className="text_pera">
                  2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate sint architecto quis? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Repellendus nihil minus, beatae
                  aut laudantium labore.
                </li>
                <li className="text_pera">
                  3. Lorem ipsum dolor sit amet consectetur.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featuringImg} alt="" className="w-3/4" />
              <div
                className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3lg
              pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue,24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      10:00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>
                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-[#31bb81] font-[500] lg:mt-4 rounded-full">
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700]">
                    Foysal Ahammed
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





          <section>
            <div className="container">
              <div className="flex  justify-between gap-[50px] lg:gap-0">
                <div className="w-1/2 hidden md:block">
                  <img src={faqImg} alt="" />
                </div>
               <div className="w-full md:w-1/2">
                <h2 className="heading">
                  Most Questions By Our Beloved Patinets
                </h2>
                <FaqList/>
               </div>
              </div>
            </div>
          </section>

           <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center"> What our patinets says lets knew it</h2>
            <p className="text-pera text-center mt-6">
              world-Class Care For Everyone.Our Health Systems Offers unmatched
              expert Health Care
            </p>
          </div>
          <Testimonial/>
          </div>
           </section>
    </>
  );
};

export default Home;
