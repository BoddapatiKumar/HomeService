"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GlobalApi from "@/app/_services/GlobalApi";
import MyBookingList from "@/app/_components/MyBookingList";

const MyBooking = () => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    getBookingHistory();
  }, []);

  const getBookingHistory = () => {
    GlobalApi.getUserBookingHistory("Kumar@gmail.com").then((res) => {
      setBooking(res?.bookings);
    });
  };

  const filterData = (type) => {
    const result = booking.filter((item) =>
      type == "booked"
        ? new Date(item.date) >= new Date()
        : new Date(item.date) <= new Date()
    );
    return result;
  };

  return (
    <div className="my-10 mx-5 md:mx-36">
      <h2 className="font-bold text-[30px] my-3 text-violet-700">
        My Bookings
      </h2>
      <Tabs defaultValue="booked" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="booked">Booked</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="booked">
          <MyBookingList booking={filterData("booked")} />
        </TabsContent>
        <TabsContent value="completed">
          <MyBookingList booking={filterData("completed")} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyBooking;
