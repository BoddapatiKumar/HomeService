import React from 'react'
import CategorySideNav from './_components/CategorySideNav'

const layout = ({children}) => {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-4'>
            <div className='hidden md:block'>
                <CategorySideNav />
                {/* side Nav Component */}
            </div>
            <div className='md:col-span-3'>
                {children}
            </div>

        </div>
      
    </div>
  )
}

export default layout
