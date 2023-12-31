import React from 'react';

const Search = () => {
  return (
    <section className='max-container padding-container flex flex-col py-5 pb-7 flex-center justify-center items-center'>
      <h2 className='text-gray-50 bold-32 mb-3'>Let's Search Your Need!</h2>
      <div className='max-w-[530px] flex justify-center m-2 bg-gray-100 px-10 p-5 rounded-full mt-3 border-gray-10 hover:border-gray-400 border-2'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-black mr-2"
        >
          <path
            fillRule="evenodd"
            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>

        <div className='flex flex-col md:flex-row w-full'>
          <input
            type="text"
            placeholder='Location'
            className='flex-1 bg-transparent outline-none text-black w-full regular-18 mb-2 md:mb-0 md:mr-2'
          />
          <input
            type="date"
            placeholder='Date'
            className='bg-transparent outline-none text-gray-400 regular-18'
          />
        </div>
      </div>
    </section>
  );
};

export default Search;
