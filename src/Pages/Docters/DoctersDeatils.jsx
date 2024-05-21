import React, { useState } from "react";
import DocterImg from "../../Images/doctor-img02.png";
import DocterAbout from "./DocterAbout";
import Feedback from './Feedback'
import SidePanel from "./SidePanel";
import star from '../../Images/Star.png'
import {BASE_URL} from '../../Config'
import useFetchData from '../../hooks/useFetchData'
import Loader from '../../Components/Loader/Loading'
import { useParams } from "react-router-dom";


const DoctersDeatils = () => {

  const [tab,setTab] = useState('about')

  const {id} = useParams()


  const {data : doctor, loading } =  useFetchData(`${BASE_URL}/doctors/${id}`)
  
  

  const {
    name,
    avgRating,
    totalRating,
    photo,
    specialization,
    qualifications,
    experiences,
    timeSlots,
    bio,
    ticketPrice,
    review,
    about,

  } = doctor;
  
  
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">

      {loading &&<Loader/>}


        {!loading && <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md: col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={photo} />
              </figure>
              <div >
              <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">Surgon</span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  {name}
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img
                      src={star}
                      alt=""
                    />{avgRating}
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] ☐text-textColor">
                    ({totalRating})
                  </span>
                </div>
                <p className="text_para  text-[14px] leading-5 md:  lg:max-w-[390px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dicta, alias! 
              </p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#0066ff34] ">
            <button onClick={()=> setTab('about')}
            className={`${
              tab === "about" &&' border-b border-solid bg-primaryColor'}py-2 px-5 mr-5 text-[16px] leading-7 Otext-headingColor font-semibold1`}>
            About</button>

            <button onClick={()=> setTab('feedback')}
            className={`${
              tab === "feedback" &&'border-b border-solid border-primaryColor'}py-2 px-5 mr-5 text-[16px] leading-7 Otext-headingColor font-semibold1`}> 
            Feedback</button>
            </div>

            <div className="mt-[50px]">
            {
              tab==='about' && <DocterAbout name={name} about={about} experiences={experiences} qualifications={qualifications}/>
            }
            {
              tab==='feedback' && <Feedback review={review}/>
            }  
            </div>
          </div>
          <SidePanel doctorId={doctor._id} ticketPrice={ticketPrice} timeSlots={timeSlots}/>
          <div>
           
          </div>
        </div>}
      </div>
    </section>
  );
};

export default DoctersDeatils;
