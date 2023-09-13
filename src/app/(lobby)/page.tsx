import { Badge } from '@/components/ui/Badge'
import { Button } from '@nextui-org/button'
import dynamic from 'next/dynamic'
import { Balancer } from 'react-wrap-balancer'

const Meteors = dynamic(() => import('@/components/Meteors'), { ssr: false })

export default function Home () {
  return (
    <>
      <section className='relative'>
        <div className='w-full h-full absolute top-0'>
          <div className='absolute w-2/3 md:w-1/2 lg:w-1/4 h-md translate top-16 right-0 left-0 mx-auto rounded-full bg-gradient-conic from-sky-200 via-blue-200 blur-2xl content-[""] opacity-10 dark:from-sky-900/40 dark:via-blue-600/40' />
          <div className='absolute w-1/2 lg:w-sm h-sm translate top-6 sm:top-12 left-0 right-0 mx-auto rounded-full bg-gradient-radial from-emah dark:from-emah/40 dark:to-blue-700/30 to-transparent blur-2xl content-[""] opacity-10' />
        </div>
        <div className='max-w-7xl px-4 md:px-6 mx-auto pt-8 sm:pt-24 relative z-10'>
          <div className='flex flex-col items-center gap-y-6'>
            <Badge className='sm:text-lg pt-3 pb-3.5 px-0.5 sm:pt-3.5 sm:pb-4 sm:px-1' variant='bordered'>
              <span className='text-emah font-bold'>-mkt</span>
              <span className='text-muted-foreground'>+hacks</span>
            </Badge>
            <Balancer className='font-cairo text-center space-y-6'>
              <h1 className='text-[2.75rem] leading-none sm:text-6xl lg:text-7xl -tracking-wide lg:leading-[5rem] font-black text-foreground'>
                El orden de los factores <span className='text-emah'>Sí</span> altera el producto
              </h1>
              <p className='text-xl text-muted-foreground tracking-wider leading-relaxed'>
                Impulsamos a emprendedores y empresarios a consolidar su modelo de negocio,
                ofreciendo productos intangibles de alto valor agregado para sus clientes.
              </p>
            </Balancer>
            <Button color='primary' radius='sm' size='lg'>
              Contáctanos
            </Button>
          </div>
        </div>
      </section>
      <video
        className='max-w-7xl w-full h-auto mt-24 sm:mt-48 object-cover object-center aspect-video sm:mx-auto sm:border-8 sm:border-border sm:rounded-xl'
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
      <div className='w-full h-full absolute top-0 overflow-hidden'>
        <Meteors />
      </div>
    </>
  )
}
