// Componengts
import { Chip } from '@/components/ui/Chip'
import { Button } from '@nextui-org/button'
import { Balancer } from 'react-wrap-balancer'
// Utils
import dynamic from 'next/dynamic'
import { Icons } from '@/components/Icons'
import { Card, CardBody, CardHeader } from '@/components/ui/Card'

const Meteors = dynamic(() => import('@/components/Meteors'), { ssr: false })

export default function Home () {
  return (
    <>
      <section className='relative dark:bg-gradient-to-b dark:from-black dark:via-[#222222] dark:to-[#222222] lg:pb-12'>
        <div className='max-w-7xl px-4 md:px-6 mx-auto pt-4 sm:pt-16 relative z-10'>
          <div className='flex flex-col items-center gap-y-8'>
            <Chip className='py-3.5 px-1 border-1 bg-secondary' variant='bordered'>
              <span><span className='text-emah font-semibold'>-mkt</span>+hacks</span>
            </Chip>
            <div className='font-cairo text-center space-y-6'>
              <Balancer as='h1' className='relative'>
                <span className='relative text-h1 text-h'><Icons.Doodle className='w-auto h-20 sm:h-28 lg:h-32 fill-emah absolute top-1 lg:top-2 my-auto -left-9 sm:-left-12 lg:-left-16 -z-10' />No necesitas más ni mejor marketing</span>
              </Balancer>
              <Balancer as='p' className='sm:text-xl text-muted-foreground tracking-wider leading-relaxed'>
                Impulsamos a emprendedores y empresarios a consolidar su modelo de negocio, ofreciendo productos intangibles de alto valor agregado para sus clientes.
              </Balancer>
            </div>
            <Button className='mt-2 sm:mt-4 p-4 font-bold text-secondary' color='primary' radius='sm' size='lg'>
              Contáctanos
            </Button>
          </div>
        </div>
        <video
          className='max-w-7xl w-full h-auto mt-16 md:mt-24 lg:mt-32 object-cover object-center aspect-video xl:mx-auto xl:border-4 xl:border-zinc-900 xl:rounded-[14px] z-10 relative'
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
        <div className='w-full h-full absolute top-0 dark:hidden'>
          <div className='absolute w-full lg:w-2/3 xl:w-1/2 h-md translate top-24 right-0 left-0 mx-auto rounded-full bg-gradient-conic from-sky-200 via-blue-300 blur-2xl content-[""] opacity-10 dark:from-sky-950' />
          <div className='absolute w-3/4 lg:w-2xl h-sm translate top-6 sm:top-24 left-0 right-0 mx-auto rounded-full bg-gradient-radial from-emah/60 via-emah/40 dark:from-emah/30 dark:via-emah/20 to-transparent blur-2xl content-[""] opacity-20' />
        </div>
        <div className='w-full h-full absolute top-0 overflow-hidden'>
          <Meteors />
        </div>
      </section>
      <section className='dark:bg-black border-b sm:border-y'>
        <div className='max-w-7xl mx-auto py-12 lg:py-24 px-4 md:px-6 space-y-12 sm:space-y-16'>
          <div className='space-y-4 sm:space-y-6 text-center'>
            <Balancer as='h2'>
              <span className='text-h text-h2'>Lorem ipsum dolor sit amet</span>
            </Balancer>
            <Balancer as='p' className='text-muted-foreground'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid esse cupiditate totam ullam quod sunt recusandae porro nobis, illum eos.
            </Balancer>
          </div>
          <div className='flex flex-col lg:flex-row gap-8'>
            <Card className='lg:max-w-[400px] border dark:border-zinc-700 dark:bg-zinc-950 p-1'>
              <div className='dark:bg-gradient-to-t dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-900 w-full h-full rounded-[9px]'>
                <CardHeader>
                  <Icons.Define className='w-10 sm:w-12 h-auto mb-1' />
                </CardHeader>
                <CardBody className='space-y-3'>
                  <h3 className='text-lg md:text-xl font-bold'>Define</h3>
                  <Balancer as='p' className='text-muted-foreground'>Make beautiful websites regardless of your design experience.</Balancer>
                </CardBody>
              </div>
            </Card>
            <Card className='lg:max-w-[400px] border dark:border-zinc-700 dark:bg-zinc-950 p-1'>
              <div className='dark:bg-gradient-to-t dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-900 w-full h-full rounded-[9px]'>
                <CardHeader>
                  <Icons.Integrate className='w-10 sm:w-12 h-auto mb-1' />
                </CardHeader>
                <CardBody className='space-y-3'>
                  <h3 className='text-lg md:text-xl font-bold'>Integra</h3>
                  <Balancer as='p' className='text-muted-foreground'>Make beautiful websites regardless of your design experience.</Balancer>
                </CardBody>
              </div>
            </Card>
            <Card className='lg:max-w-[400px] border dark:border-zinc-700 dark:bg-zinc-950 p-1'>
              <div className='dark:bg-gradient-to-t dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-900 w-full h-full rounded-[9px]'>
                <CardHeader>
                  <Icons.Connect className='w-10 sm:w-12 h-auto mb-1' />
                </CardHeader>
                <CardBody className='space-y-3'>
                  <h3 className='text-lg md:text-xl font-bold'>Conecta</h3>
                  <Balancer as='p' className='text-muted-foreground'>Make beautiful websites regardless of your design experience.</Balancer>
                </CardBody>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
