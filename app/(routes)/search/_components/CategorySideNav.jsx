"use client";
import GlobalApi from "@/app/_services/GlobalApi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const CategorySideNav = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedcategory, setSelectedCategory] = useState();
  const params = usePathname();

  useEffect(() => {
    getCategoryList();
  }, []);

  useEffect(() => {
    params && setSelectedCategory(params.split("/")[2]);
  }, [params]);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((res) => {
      setCategoryList(res?.categories);
    });
  };

  return (
    <div className="mt-5">
      <h2 className="font-bold mg-3 text-lg text-violet-700">Categories</h2>
      <div className="mt-5">
        {categoryList.map((item, index) => (
          <Link
            href={"/search/" + item.name}
            key={index}
            className={`flex gap-2 p-3 border rounded-lg mb-3 mr-10 cursor-pointer items-center hover:bg-purple-50 hover:shadow-md hover:text-purple-800 hover:border-violet-700 ${selectedcategory==item.name && 'border-violet-700'}`}
          >
            <Image src={item.icon.url} alt="nav" width={35} height={35} />
            <h2>{item.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySideNav;
