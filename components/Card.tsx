import React from 'react';
import Image from 'next/image';
import { MdAirlineSeatReclineExtra } from 'react-icons/md';
import { PiSteeringWheelFill } from 'react-icons/pi';
import { FaGasPump } from 'react-icons/fa';
import Button from './Button';

const Card = (props: any) => {
    const { name, price, image, seat, carType, carAvg } = props.car;

    return (
        <div className="w-[280px] min-h-[350px] mx-auto md:w-[320px] lg:w-full lg:flex mt-10 relative">
            <div className="bg-white lg:min-w-[280px] rounded-lg overflow-hidden border-gray-10 shadow-lg relative z-10 group hover:border-2 hover:border-gray-10">
                <Image
                    src={image[0]?.url}
                    alt="cars"
                    width={220}
                    height={200}
                />

                <div className="p-4">
                    <p className="bold-16 text-gray-50 mb-2">{name}</p>

                    <div className="flex justify-between">
                        <h2 className="text-xl font-semibold text-gray-800">
                            ${price} <span className="text-sm text-gray-600">/day</span>
                        </h2>
                    </div>

                    <div className="flex flex-row gap-6 justify-center items-center mt-4 pt-10">
                        <div className="text-center text-gray-500 group-hover:hidden">
                            <MdAirlineSeatReclineExtra className="w-full text-[22px] mb-2" />
                            <h2 className="text-[15px]">{seat} Seats</h2>
                        </div>

                        <div className="text-center text-gray-500 group-hover:hidden">
                            <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
                            <h2 className="text-[15px]">{carType}</h2>
                        </div>

                        <div className="text-center text-gray-500 group-hover:hidden">
                            <FaGasPump className="w-full text-[22px] mb-2" />
                            <h2 className="text-[15px]">{carAvg} MPG</h2>
                        </div>

                        <div className="hidden group-hover:flex">
                            <Button
                                type='button'
                                title='Rent Now'
                                variant='bg-gradient-to-r from-red-400 via-red-500 to-red-800 text-white h-[50px] rounded-[10px] w-[200px]'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;