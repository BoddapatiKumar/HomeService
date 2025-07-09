import GlobalApi from "@/app/_services/GlobalApi";
import { Button } from "@/components/ui/button";
import { NotebookPen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import BookingSection from "./BookingSection";

const SuggestedBuisness = ({ buisness }) => {
  const [buisnessList, setBuisnessList] = useState([]);

  const getBuisnessList = () => {
    GlobalApi.getBuisnessListByCategory(buisness?.category?.name).then(
      (res) => {
        setBuisnessList(res?.buisnessLists);
      }
    );
  };

  useEffect(() => {
    buisness && getBuisnessList();
  }, [buisness]);

  return (
    <div className="pl-10">
      <BookingSection buisness={buisness}>
        <Button className="bg-violet-700 hover:bg-violet-700 flex gap-2 w-full">
          <NotebookPen />
          Book Appointment
        </Button>
      </BookingSection>
      <h2 className="font-bold text-lg mt-3">Similar Buisness</h2>
      <div>
        {buisnessList &&
          buisnessList.map((item, index) => (
            <Link
              href={"/details/" + item.id}
              key={index}
              className="flex gap-2 mt-3 mb-3 hover:border border-violet-700 rounded-lg p-2 cursor-pointer hover:shadow-md"
            >
              <Image
                src={item?.images?.[0]?.url}
                alt="buisness"
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />
              <div>
                <h2 className="font-bold">{item.name}</h2>
                <h2 className="text-violet-700">{item.contactPerson}</h2>
                <h2 className="text-gray-600">{item.address}</h2>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SuggestedBuisness;
