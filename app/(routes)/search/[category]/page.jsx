"use client"

import GlobalApi from "@/app/_services/GlobalApi"
import { use, useEffect } from "react"

const page = ({params}) => {
    const {category}=use(params);

    const getBuisnessList=()=>{
        GlobalApi.getBuisnessListByCategory(category).then(res=>{
            console.log(res);
        });
    }

    useEffect(()=>{
        console.log(category);
    },[category])
  return (
    <div>
      Buisness By Category
    </div>
  )
}

export default page
