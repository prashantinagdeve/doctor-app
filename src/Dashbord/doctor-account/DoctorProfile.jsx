import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { BASE_URL, token } from "../../Config";
import { toast } from "react-toastify";

const DoctorProfile = ({ doctorData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
    gender: "",
    specialization: "",
    ticketPrice:"" ,
    qualifications: [],
    experiences: [],
    timeSlots: [{ day: "", startingTime: "", endingTime: "" }],
    about: "",
    photo: "null",
  });

  useEffect(() => {
    setFormData({
      name: doctorData.name,
      email: doctorData.email,

      phone: doctorData?.phone,
      bio: doctorData?.bio,
      gender: doctorData?.gender,
      specialization: doctorData?.specialization,
      ticketPrice: parseInt(doctorData?.ticketPrice),
      qualifications: doctorData?.qualifications,
      experiences: doctorData?.experiences,
      timeSlots: doctorData?.timeSlots,
      about: doctorData?.about,
      photo: doctorData?.photo,
    });
  }, [doctorData]);

  console.log("form data : ", formData)

  const handdleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setFormData({ ...formData, photo: data.url });
  };

  const updateProfileHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) {
        throw Error(result.message);
      }
      toast.success(result.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  // reusable function for adding item

  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };

  // reusable input change function

  const handleReusableInputChangeFuc = (key, index, event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      const updateItems = [...prevFormData[key]];

      updateItems[index][name] = value;

      return {
        ...prevFormData,
        [key]: updateItems,
      };
    });
  };

  //reusable function for deleting item

  const deleteItem = (key, index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i != index),
    }));
  };

  const addQualifications = (e) => {
    e.preventDefault();
    addItem("qualifications", {
      startingDate: "",
      endingDate: "",
      degree: "PHD",
      university: "Nagpur Medical College",
    });
  };

  const handleQualificationChange = (event, index) => {
    handleReusableInputChangeFuc("qualifications", index, event);
  };

  const deleteQualification = (e, index) => {
    e.preventDefault();
    deleteItem("qualifications", index);
  };

  // add exprince function
  const addExperience = (e) => {
    e.preventDefault();
    addItem("experiences", {
      startingDate: "",
      endingDate: "",
      position: "Senior Surgon",
      hospital: "AMs",
    });
  };

  const handleTimeSlot = (event, index) => {
    handleReusableInputChangeFuc("timeSlots", index, event);
  };

  const deleteTimeSlot = (e, index) => {
    e.preventDefault();
    deleteItem("timeSlots", index);
  };

  const addTimeSlot = (e) => {
    e.preventDefault();
    addItem("timeSlots", {
      day: "Sunday",
      startingTime: "10:00",
      endingTime: "02:30",
    });
  };

  const handleExperienceChange = (event, index) => {
    handleReusableInputChangeFuc("experiences", index, event);
  };

  const deleteExperience = (e, index) => {
    e.preventDefault();
    deleteItem("experiences", index);
  };

  return (
    <div>
      <h2 className=" text-headingColor font-bold text-[24px] leading-9 mb-10">
        Profile Information
      </h2>
      <form>
        <div className=" mb-5">
          {" "}
          {/*name*/}
          <p className="form__lable">Name*</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handdleInputChange}
            placeholder="Full Name"
            className="form__input"
          />
        </div>
        <div className=" mb-5">
          {" "}
          {/*email*/}
          <p className="form__lable">Email*</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handdleInputChange}
            placeholder="Email"
            className="form__input"
            readOnly
            aria-readonly
            // disabled="true"
          />
        </div>
        <div className=" mb-5">
          {" "}
          {/*phone*/}
          <p className="form__lable">Phone*</p>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handdleInputChange}
            placeholder="Phone Number"
            className="form__input"
          />
        </div>
        <div className=" mb-5">
          {" "}
          {/*Bio*/}
          <p className="form__lable">Bio*</p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handdleInputChange}
            placeholder="bio"
            className="form__input"
          />
        </div>
        <div className=" mb-5">
          {" "}
          {/*Gender*/}
          <div className=" grid grid-cols-3 gap-5 mb-[30px]">
            <div>
              <p className="form__lable">Gender*</p>
              <select
                name="gender"
                value={formData.gender}
                onChange={handdleInputChange}
                className="form__input py-3.5"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">other</option>
              </select>
            </div>
            <div>
              {" "}
              {/*Specialization*/}
              <p className="form__lable">Specialization*</p>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handdleInputChange}
                className="form__input py-3.5"
              >
                <option value="">Select</option>
                <option value="surgeon">surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
              </select>
            </div>
            <div>
              <p className="form__lable">ticket Price*</p>
              <input
                type="number"
                placeholder="100"
                name="ticketPrice"
                value={formData.ticketPrice}
                className="form__input"
                onChange={handdleInputChange}
              />
            </div>
          </div>
        </div>
        <div className=" mb-5">
          {" "}
          {/* Qualification */}
          <p className="form__lable">Qualifications*</p>
          {formData.qualifications.map((item, index) => (
            <div key={index}>
              <div>
                <div className=" grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__lable">Starting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form__input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form__lable">Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form__input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>
                <div className=" grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form__lable">Degree*</p>
                    <input
                      type="text"
                      name="degree"
                      value={item.degree}
                      className="form__input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form__lable">University*</p>
                    <input
                      type="text"
                      name="university"
                      value={item.university}
                      className="form__input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>

                <button
                  onClick={(e) => deleteQualification(e, index)}
                  className=" bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={addQualifications}
            className=" bg-black py-2  px-5 rounded text-white h-fit cursor-pointer"
          >
            {" "}
            Add Qualification
          </button>
        </div>
        <div className=" mb-5">
          {" "}
          {/* Experience */}
          <p className="form__lable"> Experiences*</p>
          {formData.experiences.map((item, index) => (
            <div key={index}>
              <div>
                <div className=" grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__lable">Starting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form__input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form__lable">Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form__input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>
                <div className=" grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form__lable">Position*</p>
                    <input
                      type="text"
                      name="position"
                      value={item.position}
                      className="form__input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form__lable">Hospital*</p>
                    <input
                      type="text"
                      name="hospital"
                      value={item.hospital}
                      className="form__input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>

                <button
                  onClick={(e) => deleteExperience(e, index)}
                  className=" bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={addExperience}
            className=" bg-black py-2  px-5 rounded text-white h-fit cursor-pointer"
          >
            {" "}
            Add Experience
          </button>
        </div>

        <div className=" mb-5">
          {" "}
          {/* Time Slots */}
          <p className="form__lable"> Time Slots*</p>
          {formData.timeSlots.map((item, index) => (
            <div key={index}>
              <div>
                <div className=" grid grid-cols-2  md:grid-cols-4  mb-[30px] gap-5">
                  <div>
                    <p className="form__lable">Day*</p>
                    <select
                      name="day"
                      value={item.day}
                      className="form__input"
                      onChange={(e) => handleTimeSlot(e, index)}
                    >
                      <option value="">Select</option>
                      <option value="sunday">Sunday</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value=" thursday"> Thursday</option>
                      <option value=" saturday"> Saturday</option>
                    </select>
                  </div>
                  <div>
                    <p className="form__lable">Staring time*</p>
                    <input
                      type="time"
                      name="startingTime"
                      value={item.startingTime}
                      className="form__input"
                      onChange={(e) => handleTimeSlot(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form__lable">Ending time*</p>
                    <input
                      type="time"
                      name="endingTime"
                      value={item.endingTime}
                      className="form__input"
                      onChange={(e) => handleTimeSlot(e, index)}
                    />
                  </div>
                  <div className=" flex items-center">
                    <button
                      onClick={(e) => deleteTimeSlot(e, index)}
                      className=" bg-red-600 p-2 rounded-full text-white text-[18px] mt-6 cursor-pointer "
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={addTimeSlot}
            className=" bg-black py-2  px-5 rounded text-white h-fit cursor-pointer"
          >
            {" "}
            Add TimeSlots
          </button>
        </div>
        <div className=" mb-5">
          {" "}
          {/* about */}
          <p className="form__lable">About*</p>
          <textarea
            name="about"
            rows={5}
            value={formData.about}
            placeholder="write about you"
            onChange={handdleInputChange}
            className="form__input"
          ></textarea>
        </div>

        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure
              className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColo:
                 flex items-center justify-center"
            >
              <img
                src={formData.photo}
                alt=""
                className="w-full rounded-full"
              />
            </figure>
          )}
          <div className="relative w-[130px] h-[50px]">
            <input
              type="file"
              name="photo"
              id="customFile"
              onChange={handleFileInputChange}
              accept=".jpg, .png"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
            <label
              htmlFor="customFile"
              className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer "
            >
              Upload Photo
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button
            type="submit"
            onClick={updateProfileHandler}
            className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorProfile;
