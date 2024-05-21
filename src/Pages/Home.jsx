import React from "react";
import heroImg01 from "../Images/hero-img01.png";
import heroImg02 from "../Images/hero-img02.png";
import heroImg03 from "../Images/hero-img03.png";
import icon01 from "../Images/icon01.png";
import { Link } from "react-router-dom";
import { BiSolidArrowToRight } from "react-icons/bi";
import icon02 from "../Images/icon02.png";
import icon03 from "../Images/icon03.png";
import About from "../Components/About/About";
import ServiceList from "../Components/Services/ServiceList";
import featureImg from "../Images/feature-img.png";
import videoIcon from "../Images/video-icon.png";
import avatarIcon from "../Images/avatar-icon.png";
import DoctorList from "../Components/Docters/DoctorList";
import fagImg from "../Images/faq-img.png";
import FaqList from "../Components/Faq/FaqList";



const Home = () => {
  return (
    <>
      {/*====hero section ==========*/}

      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/*====herocontent=====*/}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We Help Patients Live a Healthy , longer Life.
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="btn text-white">
                  Request an Appointment
                </button>

                {/*======hero counter ========*/}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-[30] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      30+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Years of Experience</p>
                  </div>

                  <div>
                    <h2 className="text-[30] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      15+
                    </h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Clinic Location</p>
                  </div>
                  <div>
                    <h2 className="text-[30] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
            {/*======hero content imges ========*/}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} />
              </div>
              <div children="mt-[30px]">
                <img src={heroImg02} className="w-full mb-[30px]" />

                <img src={heroImg03} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*====hero end==========*/}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing best medical services
            </h2>
            <p className="text__para text-center">
              WorldClass care for everyone. Our health System Offers unmatched ,
              expert health care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex flex-center justify-center">
                <img src={icon01} />
              </div>
              <div className="mt-[30px]">
                {" "}
                {/*icon01 start*/}
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  WorldClass care for everyone. Our health System Offers
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BiSolidArrowToRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
              {/*icon01 end*/}
            </div>
            <div className="py-[30px] px-5">
              {" "}
              {/*icon02 start*/}
              <div className="flex flex-center justify-center">
                <img src={icon02} />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  WorldClass care for everyone. Our health System Offers
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BiSolidArrowToRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>{" "}
            {/*icon02 end*/}
            <div className="py-[30px] px-5">
              {" "}
              {/*icon03 start*/}
              <div className="flex flex-center justify-center">
                <img src={icon03} />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  WorldClass care for everyone. Our health System Offers
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BiSolidArrowToRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            {/*icon03 end*/}
          </div>
        </div>
      </section>
      <About />

      {/* Service  start*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text__para text-center">
              World-class care for everyone . Our Health System offers unmatched
              , expert health care.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>
      {/* Service  end*/}

      {/* Feature section*/}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br /> anytime.
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2. Search for your physicin here, and contact their office.
                </li>
                <li className="text__para">
                  3. View our physicians who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 Otext-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00AM
                    </p>
                  </div>

                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>
                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px lg:leading-[22px] font-[700] text-headingColor">
                    Sadanad Nagdeve
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature end*/}

      {/* our great docter start*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text__para text-center">
              World-class care for everyone . Our Health System offers unmatched
              , expert health care.
            </p>
          </div>

          <DoctorList />
        </div>
      </section>
      {/* our great docter end*/}

      {/* faq section start*/}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={fagImg} />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most Questions by our beloved patients
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* faq section end*/}

      

    </>
  );
};

export default Home;
