import React from 'react'
import { Link } from 'react-router-dom'
import {FaCheckCircle} from 'react-icons/fa'

const CheckoutSuccess = () => {
  return (
    <div className=" bg-gray-100 h-screen">
      <div className=" bg-white p-6 md:mx-auto">
        <FaCheckCircle />
      </div>
      <div className=" text-center">
        <h3 className="md:text-2xl text-base  text-gray-900 font-semibold text-center">
          Payment Done!
        </h3>
        <p className=" text-gray-600 my-2">Thankyou For Booking the Doctor</p>
        <p>Have a Great Day</p>
        <div className="py-10 text-center">
          <Link
            to="/home"
            className="px-12 bg-blue-500 text-white font-semibold py-3"
          >
            Go Back To Home Page
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CheckoutSuccess