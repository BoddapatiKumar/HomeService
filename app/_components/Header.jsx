"use client"
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="p-5 shadow-md flex justify-between rounded-md">
      <div className="flex items-center gap-8">
        <Image src={"/logo.svg"} alt="logo" width={180} height={100} />
        <div className="md:flex items-center gap-6 hidden">
          <h2 className="hover:scale-105 hover:text-violet-700 cursor-pointer">Home</h2>
          <h2 className="hover:scale-105 hover:text-violet-700 cursor-pointer">Service</h2>
          <h2 className="hover:scale-105 hover:text-violet-700 cursor-pointer">About Us</h2>
        </div>
      </div>
      <div>
        <Link href={'/mybookings'}><Button className="cursor-pointer">My Bookings</Button></Link>
      </div>
    </div>
  );
};

export default Header;
