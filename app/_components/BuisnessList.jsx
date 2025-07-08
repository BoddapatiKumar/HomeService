import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BuisnessList = ({ buisnessList, title }) => {
  return (
    <div className="mt-5">
      <h2 className="font-bold text-[22px]">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {buisnessList.length > 0
          ? buisnessList.map((item, index) => (
              <Link href={'/details/'+item.id}
                key={index}
                className="shadow-md rounded-lg hover:scale-105 transition-all ease-in-out"
              >
                <Image
                  src={item?.images[0]?.url}
                  alt="Buisness"
                  width={500}
                  height={200}
                  className="h-[150px] md:h-[200px] object-cover rounded-lg"
                />
                <div className="flex flex-col items-baseline p-3">
                  <h2 className="p-1 bg-purple-200 text-purple-700 rounded-lg px-2 text-[12px]">
                    {item?.category?.name}
                  </h2>
                  <h2 className="font-bold text-lg">{item?.name}</h2>
                  <h2 className="text-purple-700">{item?.contactPerson}</h2>
                  <h2 className="text-gray-500 text-sm">{item.address}</h2>
                  <Button className="m-2 bg-purple-700 hover:bg-purple-700 cursor-pointer">
                    Book Now
                  </Button>
                </div>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <div key={index} className="w-full h-[300px] bg-slate-200 rounded-lg animate-pulse"></div>
            ))}
      </div>
    </div>
  );
};

export default BuisnessList;
