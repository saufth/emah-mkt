// Componengts
import { Chip } from '@/components/ui/Chip'
import { Button } from '@nextui-org/button'
import { Balancer } from 'react-wrap-balancer'
// Utils
import dynamic from 'next/dynamic'

const Meteors = dynamic(() => import('@/components/Meteors'), { ssr: false })

export default function Home () {
  return (
    <>
      <section className='relative'>
        <div className='max-w-7xl px-4 md:px-6 mx-auto pt-8 sm:pt-24 relative z-10'>
          <div className='flex flex-col items-center gap-y-6'>
            <Chip className='sm:text-lg py-3 px-0.5 sm:py-3.5 sm:px-1' variant='bordered'>
              <span className='text-emah font-bold'>-mkt</span>+hacks
            </Chip>
            <div className='font-cairo text-center space-y-6'>
              <Balancer as='h1' className='relative text-[2.75rem] leading-none sm:text-6xl lg:text-7xl -tracking-wide lg:leading-[5rem] font-black text-foreground'>
                <span className='relative z-10'>No necesitas más ni mejor mejor</span> <span className='relative px-1 sm:px-1.5 lg:px-2 text-secondary'><span className='relative z-10'>marketing</span><span className='w-full h-12 sm:h-[4.5rem] lg:h-20 absolute bg-emah top-2 bottom-0 left-0 my-auto' /></span>
              </Balancer>
              <Balancer as='p' className='text-lg sm:text-xl text-muted-foreground tracking-wider leading-relaxed'>
                Impulsamos a emprendedores y empresarios a consolidar su modelo de negocio,
                ofreciendo productos intangibles de alto valor agregado para sus clientes.
              </Balancer>
            </div>
            <Button className='mt-2 sm:mt-4' color='primary' radius='sm' size='lg'>
              Contáctanos
            </Button>
          </div>
        </div>
        <video
          className='max-w-7xl w-full h-auto mt-16 md:mt-24 lg:mt-32 object-cover object-center aspect-video xl:mx-auto xl:border-8 xl:border-border xl:rounded-xl z-10 relative'
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
        <div className='w-full h-full absolute top-0'>
          <div className='absolute w-full lg:w-2/3 xl:w-1/2 h-md translate top-24 right-0 left-0 mx-auto rounded-full bg-gradient-conic from-sky-200 via-blue-300 blur-2xl content-[""] opacity-10 dark:from-sky-950' />
          <div className='absolute w-3/4 lg:w-2xl h-sm translate top-6 sm:top-24 left-0 right-0 mx-auto rounded-full bg-gradient-radial from-emah/60 via-emah/40 dark:from-emah/30 dark:via-emah/20 to-transparent blur-2xl content-[""] opacity-20' />
        </div>
        <div className='w-full h-full absolute top-0 overflow-hidden'>
          <Meteors />
        </div>
      </section>
    </>
  )
}
