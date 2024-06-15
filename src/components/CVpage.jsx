import React from 'react'
import CV from './CV'
const CVpage = () => {
  return (
    <>
    <div className='mt-[80px] mb-5 sm:w-[60%] w-[96%] mx-auto shadow rounded'>
        <div>
            <a href='/blankcv' className='bg-blue-500 text-white p-2 w-full'>Download CV</a>
        </div>
        <CV />
    </div>
    </>
  )
}

export default CVpage