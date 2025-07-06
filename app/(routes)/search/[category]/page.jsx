"use client"

import { useEffect } from "react"

const page = ({params}) => {
    useEffect(()=>{
        console.log(params);
    },[params])
  return (
    <div>
      Buisness By Category
    </div>
  )
}

export default page
