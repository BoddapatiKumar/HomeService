"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import GlobalApi from "@/app/_services/GlobalApi";
import { toast } from "sonner";
import moment from "moment";

const BookingSection = ({ children, buisness }) => {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState([]);
  const [selectedTime, setSelectedTime] = useState();

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }

    setTimeSlot(timeList);
  };

  const saveBooking = () => {
    GlobalApi.createNewBooking(
      buisness.id,
      moment(date).format('DD-MMM-yyyy'),
      selectedTime,
      "Kumar@gmail.com",
      "Kumar"
    ).then((res)=>{
        console.log(res);
        if(res){
            setDate();
            setSelectedTime('');
            //toast message
            toast('Service Booked Successfully');

        }
    },(e)=>{
        //error toast message
        toast('Error while Booking Service');
    })
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Book your Service</SheetTitle>
            <SheetDescription>
              Select Date and Time slot to book the service
            </SheetDescription>
            <div className="flex flex-col gap-5">
              <h2 className="mt-5 font-bold text-gray-500">Select Date</h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow-sm"
                captionLayout="dropdown"
              />
            </div>
            <h2 className="my-5 font-bold text-gray-500">Select Time</h2>
            <div className="grid grid-cols-3 gap-3">
              {timeSlot.map((item, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`border rounded-full p-2 px-3 hover:bg-violet-700 hover:text-white ${
                    selectedTime == item.time && "bg-violet-700 text-white"
                  }`}
                  onClick={() => setSelectedTime(item.time)}
                >
                  {item.time}
                </Button>
              ))}
            </div>
          </SheetHeader>
          <SheetFooter>
            <SheetClose asChild>
              <div className="flex justify-between">
                <Button
                  className="w-25"
                  disabled={!(selectedTime && date)}
                  onClick={() => saveBooking()}
                >
                  Book
                </Button>
                <Button variant="destructive" className="w-25">
                  Close
                </Button>
              </div>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default BookingSection;
