import { Calendar, Clock, MapPin, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const MyBookingList = ({booking}) => {
  return (
    <div>
      {
        booking.map((book,index)=>(
            <div key={index} className=''>
               {book.buisnessList.map((item,index)=>(
                <div key={index} className='flex gap-4 border rounded-lg p-4 mb-5 shadow-md'>
                    <Image src={item?.images?.[0]?.url} 
                        alt='image'
                        width={120}
                        height={120}
                        className='rounded-lg object-cover'
                    />
                    <div className='flex flex-col gap-2'>
                        <h2 className='font-bold'>{item?.name}</h2>
                        <h2 className='flex gap-2 text-violet-700'><User/>{item?.contactPerson}</h2>
                        <h2 className='flex gap-2 text-gray-500'><MapPin />{item?.address}</h2>
                        <h2 className='flex gap-2  text-gray-500'><Calendar />Service on : {book.date}</h2>
                        <h2 className='flex gap-2  text-gray-500'><Clock />Time : {book.time}</h2>
                    </div>
                    
                </div>
               ))}
            </div>
        ))
      }
    </div>
  )
}

export default MyBookingList
