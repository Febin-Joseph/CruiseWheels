"use client"

import Catlog from '@/components/Catlog'
import Hero from '@/components/Hero'
import Search from '@/components/Search'
import { getCarsList } from '@/services'
import { useEffect, useState } from 'react'

export default function Home() {

  const [carsList, setCarsList] = useState<any>([])

  useEffect(() => {
    getCarList();
  }, [])

  const getCarList = async () => {
    const result: any = await getCarsList();
    setCarsList(result?.carLists)
    console.log(result.carLists)
  }

  return (
    <>
      <Hero />
      <Search />
      <Catlog
        carsList={carsList}
      />
    </>
  )
}
