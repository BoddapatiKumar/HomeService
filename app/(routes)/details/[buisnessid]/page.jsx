"use client";

import GlobalApi from "@/app/_services/GlobalApi";
import { useEffect, use, useState } from "react";
import BuissnessInfo from "../_components/BuissnessInfo";
import BuisnessDescription from "../_components/BuisnessDescription";
import SuggestedBuisness from "../_components/SuggestedBuisness";

const BuisnessDetail = ({ params }) => {
  const [buisness, setBuisness] = useState([]);
  const { buisnessid } = use(params);

  useEffect(() => {
    buisnessid && getBuisnessById();
  }, [buisnessid]);

  const getBuisnessById = () => {
    GlobalApi.getBuisnessById(buisnessid).then((res) => {
      setBuisness(res?.buisnessList);
    });
  };

  return (
    <div className="py-8 md:py-20 px-10 md:px-36">
      <BuissnessInfo buisness={buisness} />
      <div className="grid grid-cols-4 mt-16">
        <div className=" col-span-4 md:col-span-3">
          <BuisnessDescription buisness={buisness} />
        </div>
        <div className="hidden md:block">
          <SuggestedBuisness buisness={buisness} />
        </div>
      </div>
    </div>
  );
};

export default BuisnessDetail;
