import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div>
            <Image
                src="/hero-icon.png"
                alt='cars'
                width={600}
                height={600}
            />
        </div>
    )
}

export default Hero