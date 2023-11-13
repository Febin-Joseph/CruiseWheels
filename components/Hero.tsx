import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <section className='max-container padding-container flex flex-col gap-20 
                        py-2 pb-32 md:gap-28 lg:py-8 lg:flex-row'>
            <div className='hero-map' />

            <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
                <h1 className='bold-52 lg:bold-64'><span className='text-red-500'>Rent.</span> Drive. Thrive.</h1>
                <p
                    className='regular-16 mt-6 text-gray-30 xl:max-w-[520px] mb-6'>
                    Premium car rentals for your next great escape. Drive your dream with CruiseWheels.
                </p>

                <div className='flex flex-col w-full gap-3 sm:flex-row xs:w-52'>
                    <Button
                        type='button'
                        title='Explore The Garage'
                        variant='btn_red'
                    />
                </div>
            </div>

            <div className='relative flex flex-1 items-start'>
                <Image
                    src="/hero-icon.png"
                    alt='cars'
                    width={600}
                    height={600}
                    className='-mt-12 lg:mt-10'
                />
            </div>
        </section>

    )
}

export default Hero