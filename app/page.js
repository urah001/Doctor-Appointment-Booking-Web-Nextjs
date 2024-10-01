"use client"

import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import GlobalApi from "./_utils/GlobalApi";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {

  const [doctorList,setDoctorList]=useState([]);
  useEffect(()=>{
    getDoctorList();
  },[])
  const getDoctorList=()=>{
    GlobalApi.getDoctorList().then(resp=>{
      console.log(resp.data.data);
      setDoctorList(resp.data.data);
    })
  }
  return (
    <>
   <Link rel="icon" type="image/svg+xml" href="/assets/images/favicon.svg"/>
<Link rel="icon" type="image/png" href="/assets/images/favicon.png"/>
    <div>
        {/* Hero Section  */}
        <Hero/>

        {/* Search bar + Categories  */}
        <CategorySearch/>

        {/* Popular Doctor List  */}
        <DoctorList doctorList={doctorList}/>
    </div>
    </>
  );
}
