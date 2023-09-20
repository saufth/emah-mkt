'use client'
import { Button } from '@nextui-org/react'

export default function Video () {
  return (
    <div className='fixed sm:right-6 lg:right-12 bottom-0 sm:bottom-6 lg:bottom-12 w-full sm:w-xs h-16 sm:h-auto border-t sm:border bg-white dark:bg-black overflow-hidden sm:rounded-[14px] z-10 flex items-center'>
      <video
        className='w-auto sm:w-full sm:h-auto h-full sm:aspect-video relative'
        width={1920}
        height={1080}
        controls={false}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        controlsList='nodownload noplaybackrate'
      >
        <source src='/video/emah.mp4' type='video/mp4' />
      </video>
      <div className='w-full p-3 sm:absolute bottom-0 left-0 flex justify-end items-center gap-x-2'>
        <Button size='sm' variant='light' className='sm:text-white'>
          Descartar
        </Button>
        <Button size='sm' color='primary' className='sm:bg-white sm:text-black'>
          Ver video
        </Button>
      </div>
    </div>
  )
}
