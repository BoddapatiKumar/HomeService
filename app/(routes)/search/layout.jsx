import React from 'react'
import CategorySideNav from './_components/CategorySideNav'

const layout = ({children}) => {
  return (
    <div>
        <div className='grid grid-cols-4'>
            <div>
                <CategorySideNav />
                {/* side Nav Component */}
            </div>
            <div className='col-span-3'>
                {children}
            </div>

        </div>
      
    </div>
  )
}

export default layout
