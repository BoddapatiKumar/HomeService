"use client";
import React, { useEffect, useState } from "react";

import CategoryList from "./_components/CategoryList";
import HeroSection from "./_components/HeroSection";
import GlobalApi from "./_services/GlobalApi";

export default function Home() {

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((res) => {
      setCategoryList(res?.categories);
    });
  };
  return (
    <div className="">
      <HeroSection />

      <CategoryList Categories={categoryList}/>
    </div>
  );
}
