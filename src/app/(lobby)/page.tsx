import { TypeAnimation } from '@/components/TypeAnimation'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@nextui-org/button'
import { Balancer } from 'react-wrap-balancer'

export default function Home () {
  return (
    <>
      <section className='relative'>
        <div className='absolute w-full lg:w-1/3 h-xs translate top-16 right-0 left-0 mx-auto rounded-full bg-gradient-radial from-emah/10 to-transparent blur-2xl content-[""] dark:opacity-60' />
        <div className='absolute w-full lg:w-1/2 h-md translate top-36 right-0 left-0 mx-auto rounded-full bg-gradient-radial from-sky-400/10 to-transparent blur-2xl content-[""] dark:opacity-60' />
        <div className='max-w-7xl px-4 md:px-6 mx-auto pt-8 sm:pt-36 relative'>
          <div className='flex flex-col items-center gap-y-6'>
            <Badge className='rounded-md px-3.5 py-1.5' variant='secondary'>
              ANTI-MARKETING
            </Badge>
            <Balancer className='font-cairo text-center space-y-6'>
              <h1 className='text-[2.75rem] leading-none sm:text-6xl lg:text-7xl -tracking-wide lg:leading-[5rem] font-black text-foreground'>
                El orden de los factores <br className='hidden sm:block' /><span className='text-emah'>Sí</span> <br className='sm:hidden' /><TypeAnimation sequence={[100, 'altera el producto']} speed={50} cursor={false} />
              </h1>
              <p className='text-xl text-muted-foreground tracking-wider leading-relaxed'>
                Impulsamos a emprendedores y empresarios que ofrecen productos intangibles de alto
                valor para sus clientes a consolidar sus modelos de negocios.
              </p>
            </Balancer>
            <Button color='primary' radius='sm' size='lg'>
              Contáctanos
            </Button>
          </div>
        </div>
      </section>
      {/* <video
        className='w-9xl h-auto object-cover object-center aspect-video'
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
      </video> */}
    </>
  )
}
