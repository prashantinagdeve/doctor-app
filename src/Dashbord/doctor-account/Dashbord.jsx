import React, { useState } from "react";
import Loader from "../../Components/Loader/Loading";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../Config";
import Tabs from "./Tabs";
import star from "../../Images/Star.png";
import DoctorAbout from "../../Pages/Docters/DocterAbout";
import DoctorProfile from "./DoctorProfile";
import Appoitment from "./Appoitment";

const Dashbord = () => {
  const { data, loading, error } = useFetchData(
    `${BASE_URL}/doctors/profile/me`
  );

  const [tab, setTab] = useState("Overview");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && <Loader />}
        {!loading && !error && (
          <div className=" grid lg:grid-cols-3 gap-[30px] lg:gap[50px]">
            <Tabs tab={tab} setTab={setTab} />
            <div className=" lg:col-span-2">
              {tab === "Overview" && (
                <div>
                  Overview
                  <div className=" flex items-center gap-4 mb-10">
                    <figure className=" max-h-[200px] max-w-[200px]">
                      <img src={data.photo} className=" w-full" />
                    </figure>
                    <div>
                      <span
                        className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 1g:py-2 1g:px-6rounded
                  text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold"
                      >
                        {data. specialization}  surgeon
                      </span>
                      <h3 className="text-[22x] leading-9 font-bold text-headingColor mt-3">
                      {data.name}
                      </h3>
                      <div className=" flex items-center gap-[6px]">
                        <span className="flex items-center gap-[6px] text-headingColor text-[16px] leading-5 lg:text[16px] lg:leading-6 font-semibold">
                          <img src={star} />
                          {data.averageRating}
                        </span>
                        <span className="flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text[16px] lg:leading-6 font-semibold">
                          ({data.totalRating})
                        </span>
                      </div>
                      <p className=" text__para font-[15px] lg:max-w-[390px] leading-6">{data.bio} Doctors Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                      eius assumenda corrupti at fugiat ipsum odio laudantium quisquam
                      veritatis consectetur velit </p>
                    </div>
                  </div>
                  <DoctorAbout name={data.name} about={data.about} qualifications={data.qualifications} experience={data.experience}/>
                </div>
              )}
              {tab === "appoitment" && <Appoitment appoitments={data.appoitments}/> }
              {tab === "settings" &&  <DoctorProfile doctorData={data}/>}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashbord;
