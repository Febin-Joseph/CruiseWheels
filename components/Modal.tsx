import React from 'react';
import Button from './Button';
import { FaGasPump } from 'react-icons/fa';
import { PiSteeringWheelFill } from 'react-icons/pi';
import { MdAirlineSeatReclineExtra } from 'react-icons/md';
import Image from 'next/image';
import Form from './Form';

const Modal = ({ car, onClose, setIsModalOpen }: any) => {

    return (
        <div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl padding-container 3xl:px-20 4xl:px-20">
                    <h2 className='text-gray-50 bold-32 mb-3'>Rent Your Car Now!</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Displaying Car */}
                        <div>
                            <div className="w-[280px] min-h-[350px] mx-auto md:w-[320px] lg:w-full lg:flex mt-10 relative">
                                <div className="bg-white lg:min-w-[280px] rounded-lg overflow-hidden border-gray-10 shadow-xl relative z-10">
                                    <Image src={car?.image[0]?.url} alt="cars" width={220} height={200} />
                                    <div className="p-4">
                                        <p className="bold-16 text-gray-50 mb-2">{car?.name}</p>
                                        <div className="flex justify-between">
                                            <h2 className="text-xl font-semibold text-gray-800"> ${car?.price}{' '} <span className="text-sm text-gray-600">/day</span> </h2>
                                        </div>
                                        <div className="flex flex-row gap-6 justify-center items-center mt-4 pt-10">
                                            <div className="text-center text-gray-500">
                                                <MdAirlineSeatReclineExtra className="w-full text-[22px] mb-2" />
                                                <h2 className="text-[15px]">{car?.seat} Seats</h2>
                                            </div>
                                            <div className="text-center text-gray-500">
                                                <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
                                                <h2 className="text-[15px]">{car?.carType}</h2>
                                            </div>
                                            <div className="text-center text-gray-500">
                                                <FaGasPump className="w-full text-[22px] mb-2" />
                                                <h2 className="text-[15px]">{car?.carAvg} MPG</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Displaying Form */}
                        <div className='mt-7 pt-3'>
                            <div>
                                <Form
                                    car={car} 
                                    onClose={onClose} 
                                    setIsModalOpen={setIsModalOpen}
                                    />
                            </div>
                        </div>
                    </div>
                    {/* <div className="modal-action">
                        <form method="dialog">
                            <button className="btn" onClick={handleClose}>Close</button>
                        </form>
                    </div> */}
                </div>
            </dialog>
        </div>
    );
};

export default Modal;
