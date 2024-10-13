import React from 'react'
import Image from 'next/image'

type Props = {
    size? : number;
}

const LoadingLogo = ({size = 100}: Props) => {
  return (
    <div className='h-full w-full flex items-center justify-center'>
        <Image src={"/logo.svg"} alt='LogoImage' className='animate-pulse duration-800' width={size} height={size}/>
    </div>
  )
}

export default LoadingLogo