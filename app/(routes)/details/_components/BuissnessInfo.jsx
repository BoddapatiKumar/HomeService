import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Share, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const BuissnessInfo = ({ buisness }) => {
  const imageUrl = buisness?.images?.[0]?.url;

  return (
    <div className="flex gap-4 items-center">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="logo"
          width={150}
          height={200}
          className="rounded-full h-[150px] object-fit-cover"
        />
      )}
      <div className="flex justify-between items-center  w-full">
        <div className="flex flex-col items-baseline gap-3">
          <h2 className="text-violet-700 bg-violet-200 rounded-full p-1 px-2 text-lg">
            {buisness?.category?.name}
          </h2>
          <h2 className="text-[40px] font-bold ">{buisness?.name}</h2>
          <h2 className="flex gap-2 text-lg text-gray-500">
            <MapPin />
            {buisness?.address}
          </h2>
          <h2 className="flex gap-2 text-lg text-gray-500">
            <Mail />
            {buisness?.email}
          </h2>
        </div>
        <div className="flex flex-col gap-5 items-end">
          <Button className="bg-violet-700 hover:bg-violet-700">
            <Share />
          </Button>
          <h2 className="flex gap-2 text-xl text-violet-700">
            <User />
            {buisness?.contactPerson}
          </h2>
          <h2 className="flex gap-2 text-xl text-gray-500">
            <Clock />
            Available between 8:00 AM to 10:00 PM
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BuissnessInfo;
