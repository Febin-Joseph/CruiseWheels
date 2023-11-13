import React from 'react'

const Search = () => {
  return (
    <div className='max-container padding-container flex flex-col py-5 pb-24 flexCenter'>
      <h2 className='text-gray-50 bold-32 mb-3'>Let's Search Your Need !</h2>
      <div className='flex justify-center bg-gray-100 w-[0%] md:w-[440px] p-5 rounded-full mt-3 border-gray-10 hover:border-gray-400 border-2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black mr-2">
          <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
        </svg>

        <div className='flex flex-row'>
          <input
            type="text"
            placeholder='Location'
            className='bg-transparent outline-none text-gray-500'
          />
          <input
            type="date"
            className='bg-transparent outline-none text-gray-400'
          />
        </div>
      </div>
    </div>
  )
}

export default Search