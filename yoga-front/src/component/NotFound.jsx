import React from 'react'

const NotFound = () => {
  return (
    <div className=' flex rounded-lg  justify-center items-center bg-white'>
     <div className=" flex flex-grow items-center justify-center bg-gray-50">
  <div className="rounded-lg bg-white p-8 text-center shadow-xl">
    <h1 className="mb-4 text-4xl font-bold">404</h1>
    <p className="text-gray-600">Oops! The page you are looking for could not be found.</p>
    <a href="/" className="mt-4 inline-block rounded bg-orange-400 px-4 py-2 font-semibold text-white hover:bg-orange-500"> Go back to Home </a>
  </div>
</div>
      
    </div>
  )
}

export default NotFound
