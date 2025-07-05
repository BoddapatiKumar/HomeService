import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex items-center flex-col justify-center pt-14 pb-7 gap-3'>
      <h2 className='font-bold text-[46px] text-center'>Find Home <span className='text-violet-700'>Service/Repair</span> <br /> Near You</h2>
      <h2 className='text-xl text-gray-400'>Explore Home Service & Repair near you</h2>
      <div className='mt-4 flex items-center gap-4'>
        <Input placeholder="Search" className="rounded-full md:w-[350px] "></Input>
        <Button className="rounded-full h-[40px]"><Search className='w-3 h-3'/></Button>
      </div>
    </div>
  )
}

export default HeroSection
