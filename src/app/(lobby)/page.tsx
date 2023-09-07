import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Balancer } from 'react-wrap-balancer'

export default function Home () {
  return (
    <>
      <div className='max-w-7xl px-4 md:px-6 mt-16 sm:mt-24 mx-auto'>
        <div className='flex flex-col items-center gap-y-6'>
          <Badge className='rounded-md px-3.5 py-1.5' variant='secondary'>
            ANTI-MARKETING
          </Badge>
          <Balancer className='font-cairo text-center space-y-6'>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl -tracking-wide lg:leading-[5rem] font-black bg-clip-text text-transparent bg-gradient-to-t from-black to-zinc-700 dark:from-zinc-200 dark:to-white'>
              El orden de los factores <span className='text-emah'>Si</span> altera el producto
            </h1>
            <p className='text-xl text-muted-foreground tracking-wider leading-relaxed'>
              Impulsamos a emprendedores y empresarios que ofrecen productos intangibles de alto
              valor para sus clientes a consolidar sus modelos de negocios.
            </p>
          </Balancer>
          <Button size='full' className='sm:mt-4'>
            Contáctanos
          </Button>
        </div>
      </div>
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
