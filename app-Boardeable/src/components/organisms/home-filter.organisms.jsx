import React from 'react'

function HomeFilterOrganism() {
  return (
    <div className='flex flex-col w-40 gap-2 outline-none'>
     <span className='text-md font-semibold'>Sort by</span> 
     <select className='border rounded-md px-2 shadow-md py-2'>
      <option value="">Created Date</option>
     </select>
    </div>
  )
}

export default HomeFilterOrganism