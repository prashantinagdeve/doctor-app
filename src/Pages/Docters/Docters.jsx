import React, { useEffect, useState } from "react";
import { doctors } from "../../Data/doctors";
import DoctorCard from "../../Components/Docters/DocterCard";
import {BASE_URL} from '../../Config'
import useFetchData from '../../hooks/useFetchData'
import Loader from '../../Components/Loader/Loading'

const Docters = () => {

  const [query , setQuery] = useState('')
  const [debounceQuery , setDebounceQuery] = useState('')

  const handleSearch =()=>{
    setQuery(query.trim())

    console.log('handle search')
  }

  useEffect(()=>{

    const timeout = setTimeout(()=>{
      setDebounceQuery(query)
    },700)

    return ()=>clearTimeout(timeout)

  },[query])


  const {data : doctors , loading, eroor } =  useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`)

  return (
    <>
    <section className=" bg-[#fff9ea]">
      <div className="container text-center">
        <h2 className="heading">Find A Docter</h2>
        <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
          <input
            type="search"
            className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer
    placeholder:text-textColor"
            placeholder="Search doctor by name"
            value={query}
            onChange={e=>setQuery(e.target.value)}
          />
          <button className="btn mt-0 rounded-[0px] rounded-r-md" onClick={handleSearch}>
            Search 
          </button>
        </div>
      </div>
    </section>

    <section>
    <div className="container">
    {loading &&<Loader/>}
    { !loading && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
    {doctors.map((doctors)=>(
      <DoctorCard key={doctors.id} doctor={doctors}/>
    ))}
    </div>}
    </div>
    </section>
    </>

    
  );
};

export default Docters;