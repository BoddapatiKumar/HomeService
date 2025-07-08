"use client";

import BuisnessList from "@/app/_components/BuisnessList";
import GlobalApi from "@/app/_services/GlobalApi";
import { use, useEffect, useState } from "react";

const page = ({ params }) => {
  const [buisnessList, setBuisnessList] = useState([]);
  const { category } = use(params);

  const getBuisnessList = () => {
    GlobalApi.getBuisnessListByCategory(category).then((res) => {
      setBuisnessList(res?.buisnessLists);
    });
  };

  useEffect(() => {
    console.log(category);
    params && getBuisnessList();
  }, [category]);

  return (
    <div>
      <BuisnessList title={category} buisnessList={buisnessList} />
    </div>
  );
};

export default page;
