import { TypeAnimation } from '@/components/TypeAnimation'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Balancer } from 'react-wrap-balancer'

export default function Home () {
  return (
    <>
      <section className='relative'>
        <div className='absolute max-w-2xl h-2xl top-6 md:top-36 left-0 right-0 mx-auto -translate-x-1/4 rounded-full bg-gradient-radial from-sky-400/10 to-transparent blur-2xl content-[""] -z-20' />
        <div className='absolute max-w-xl h-xs top-36 left-0 right-0 mx-auto rounded-full bg-gradient-radial from-emah/20 to-transparent blur-2xl content-[""] -z-10' />
        {/* <div className='absolute before:absolute before:h-full before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[""] after:absolute before:-z-20 after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-full after:bg-gradient-conic after:from-emah/30 after:via-emah/10 after:blur-2xl after:content-[""] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]' /> */}
        <div className='max-w-7xl relative px-4 md:px-6 mx-auto pt-36 sm:pt-48'>
          <div className='flex flex-col items-center gap-y-6 relative'>
            <Badge className='rounded-md px-3.5 py-1.5' variant='secondary'>
              ANTI-MARKETING
            </Badge>
            <Balancer className='font-cairo text-center space-y-6 relative'>
              {/* <div className='w-full h-4 inset-0 m-auto bg-green-500 absolute top-0 -z-10 before:absolute before:h-[100px] before:w-full before:bg-red-300' /> */}
              <h1 className='text-5xl sm:text-6xl lg:text-7xl -tracking-wide lg:leading-[5rem] font-black text-foreground'>
                El orden de los factores <br className='hidden sm:block' /><span className='text-emah'>Si</span> <br className='sm:hidden' /><TypeAnimation sequence={[1000, 'altera el producto', 2000, 'beneficia al cliente', 2000, 'aporta valor', 1000]} speed={50} repeat={Infinity} />
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
