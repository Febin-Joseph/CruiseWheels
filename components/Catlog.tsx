import React from 'react'

const Catlog = () => {
  return (
    <section className='border-2 border-red-500 max-container padding-container py-5 pb-20'>
      <h2 className='bold-32 md:w-full lg:w-full'>Garage</h2>
      <p className='regular-16 text-gray-30 mt-1'>
        Explore Our Garage For Your
        <span className='text-red-500 bold-20 hover:text-black'> Ride...</span>
      </p>

      <div className='flex flex-row flexEnd xs:gap-1 md:gap-3 lg:gap-5 -mt-20 md:-mt-20'>
        <div className="dropdown flex">
          <label tabIndex={0} className="btn m-1">Price</label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Min to Max</a></li>
            <li><a>Max To Min</a></li>
          </ul>
        </div>

        <div className="dropdown flex">
          <label tabIndex={0} className="btn m-1">Manufacter</label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Benz</a></li>
            <li><a>Porsche</a></li>
          </ul>
        </div>
      </div>

    </section>
  )
}

export default Catlog