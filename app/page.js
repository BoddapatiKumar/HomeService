"use client";
import React, { useEffect, useState } from "react";

import CategoryList from "./_components/CategoryList";
import HeroSection from "./_components/HeroSection";
import GlobalApi from "./_services/GlobalApi";
import BuisnessList from "./_components/BuisnessList";

export default function Home() {

  const [categoryList, setCategoryList] = useState([]);
  const [buisnessList,setBuisnessList]=useState([]);

  useEffect(() => {
    getCategoryList();
    getBuisnessList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((res) => {
      setCategoryList(res?.categories);
    });
  };

  const getBuisnessList=()=>{
    GlobalApi.getAllBuisnessLists().then((res)=>{
      setBuisnessList(res?.buisnessLists);
    })
  }
  return (
    <div className="">
      <HeroSection />

      <CategoryList Categories={categoryList}/>

      <BuisnessList buisnessList={buisnessList} title='Popular Buisnesses' />
    </div>
  );
}
