import React from 'react';
import {BASE_URL,token} from '../../Config'
import { toast } from 'react-toastify';

function SidePanel({doctorId,ticketPrice,timeSlots}) {

  const bookingHandler = async()=>{
    try {
      
      const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`,{
        method:'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await res.json()
      if (!res.ok)
      throw Error(data.message+'Please try Again');

      if(data.session.url){
        window.location.href = data.session.url
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error.message)
    }
  }


  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md h-80">
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 Otext-headingColor font-bold">
         {ticketPrice} rs
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text_para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>
        <ul className="mt-3">
        {timeSlots && timeSlots.map((item,index)=>(
          <li key={index} className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              {item.day.charAt(0).toUpperCase()+ item.day.slice(1)}
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
             {item.startingTime}- {item.endingTime}
            </p>
          </li>

        ))}
          
          
        </ul>
      </div>
      <button  onClick={bookingHandler} className="btn px-2 w-full rounded-md text-white">
        Book Appointment
      </button>
    </div>
  );
}

export default SidePanel;