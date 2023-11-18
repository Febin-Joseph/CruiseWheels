import React, { useEffect, useState } from "react";
import { createBooking, getLocationList } from "@/services";

const Form = ({ car, onClose, setIsModalOpen }: any) => {
    const [storeLocation, setStoreLocation] = useState<any>([]);
    const [formValue, setFormValue] = useState({
        location: '',
        pickUpDate: '',
        email: '',
        dropOffDate: '',
        pickUpTime: '',
        dropOffTime: '',
        contactNumber: '',
        userName: '',
        carId: ""
    })

    const handleClose = () => {
        setIsModalOpen(false);
        onClose();
    };

    const today: any = new Date();

    useEffect(() => {
        if (car) {
            setFormValue({
                ...formValue,
                carId: car.id
            });
        }
    }, [car])

    const handleChange = (event: any) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async () => {
        const response: any = await createBooking(formValue)
        handleClose();
    }

    useEffect(() => {
        locations();
    }, [])

    const locations = async () => {
        const response: any = await getLocationList();
        setStoreLocation(response?.locations)
    }

    return (
        <div>
            <div>
                <div className="flex flex-col w-full mb-5">
                    <label className="text-gray-400">PickUp Location</label>
                    <select className="select select-bordered w-full max-w-lg"
                        name="location"
                        onChange={handleChange}
                    >
                        <option disabled selected>
                            PickUp Location?
                        </option>
                        {storeLocation?.map((location: any, index: number) => (
                            <option key={index}>{location.address}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flec-col gap-5 mb-5">
                    <div className="flex flex-col w-full">
                        <label className="text-gray-400">Pick Up Date</label>
                        <input
                            type="date"
                            min={today}
                            onChange={handleChange}
                            placeholder="Type here"
                            name="pickUpDate"
                            className="input input-bordered w-full max-w-lg"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-gray-400">Drop Off Date</label>
                        <input
                            type="date"
                            onChange={handleChange}
                            placeholder="Type here"
                            name="dropOffDate"
                            className="input input-bordered w-full max-w-lg"
                        />
                    </div>
                </div>
                <div className="flex gap-5 ">
                    <div className="flex flex-col w-full mb-5">
                        <label className="text-gray-400">Pick Up Time</label>
                        <input
                            type="time"
                            onChange={handleChange}
                            name="pickUpTime"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-lg"
                        />
                    </div>
                    <div className="flex flex-col w-full mb-5">
                        <label className="text-gray-400">Drop Off Time</label>
                        <input
                            type="time"
                            name="dropOffTime"
                            onChange={handleChange}
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-lg"
                        />
                    </div>
                </div>

                <div className="flex flex-col w-full mb-5">
                    <label className="text-gray-400">Contact Number</label>
                    <input
                        type="text"
                        placeholder="Type here"
                        onChange={handleChange}
                        name="contactNumber"
                        className="input input-bordered w-full max-w-lg"
                    />
                </div>
                <div className="modal-action">
                    <button
                        className="btn"
                        onClick={handleClose}>
                        Close
                    </button>

                    <button
                        className="btn bg-blue-500 text-white hover:bg-blue-800"
                        onClick={handleSubmit}
                    >
                        Save
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Form;