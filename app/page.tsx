"use client"

import Catlog from '@/components/Catlog'
import Hero from '@/components/Hero'
import Search from '@/components/Search'
import { getCarsList } from '@/services'
import { useEffect, useState } from 'react'

export default function Home() {
  const [carsList, setCarsList] = useState<any>([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCarList();
  }, [])

  const getCarList = async () => {
    try {
      const result: any = await getCarsList();
      setCarsList(result.carLists);

    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Hero />
      <Search />
      {loading ? (
        <div className='items-center text-center justify-center pb-32 pt-20'>
          <span className="loading loading-dots loading-xs"></span>
          <span className="loading loading-dots loading-sm"></span>
          <span className="loading loading-dots loading-md"></span>
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <Catlog
          carsList={carsList}
        />
      )}
    </>
  );
}