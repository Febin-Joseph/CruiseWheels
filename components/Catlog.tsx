import React from 'react'
import Card from './Card'

const Catlog = (props: any) => {

  return (
    <section className='max-container padding-container py-5 pb-20'>
      <h2 className='bold-32 md:w-full lg:w-full'>Garage</h2>
      <p className='regular-16 text-gray-30 mt-1'>
        Explore Our Garage For Your
        <span className='text-red-500 bold-20 hover:text-black'> Ride...</span>
      </p>

      <div className='flex flex-row flexEnd xs:gap-1 md:gap-3 lg:gap-5 -mt-20 md:-mt-20'>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn m-1">Price</label>
          <ul tabIndex={0} className="dropdown-content z-30 menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Min to Max</a></li>
            <li><a>Max to Min</a></li>
          </ul>
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn m-1">Manufacter</label>
          <ul tabIndex={0} className="dropdown-content z-30 menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Ferrari</a></li>
            <li><a>Porsche</a></li>
            <li><a>Jaguar</a></li>
            <li><a>Bentley</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-4">
        {props.carsList.map((car: any, index: number) => (
          <div key={index}>
            <Card car={car} />
          </div>
        ))}
      </div>

    </section>
  )
}

export default Catlog