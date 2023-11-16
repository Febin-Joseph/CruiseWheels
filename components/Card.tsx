import Image from 'next/image'
import React, { useState } from 'react'
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { PiSteeringWheelFill } from "react-icons/pi";
import { FaGasPump } from "react-icons/fa";

const Card = (props: any) => {

    const [cars, setcars] = useState(props.car)

    return (
        <div className='bg-gray-10 p-2 rounded-[10px] mt-4'>
            <div className='flex flex-col max-container padding-container'>
                <h2 className='regular-18 text-gray-30'>{cars.name}</h2>
                <h2 className='regular-16 regular-14'>
                    <span>$ </span>
                    {cars.price}
                    <span> /day</span>
                </h2>
                <Image
                    src={cars.image[0]?.url}
                    alt='cars'
                    width={220}
                    height={200}
                />

                <div className='flex flex-row gap-20 justify-center items-center pb-4'>
                    <div className='text-center text-gray-500'>
                        <MdAirlineSeatReclineExtra className="w-full text-[22px] mb-2" />
                        <h2>{cars.seat} Seats</h2>
                    </div>

                    <div className='text-center text-gray-500'>
                        <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
                        <h2>{cars.carType}</h2>
                    </div>

                    <div className='text-center text-gray-500'>
                        <FaGasPump className="w-full text-[22px] mb-2" />
                        <h2>{cars.carAvg} MPG</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card