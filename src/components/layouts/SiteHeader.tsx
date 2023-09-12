import { Icons } from '@/components/Icons'
import { ThemeToggle } from './ThemeToggle'
import Link from 'next/link'
import { Button } from '@nextui-org/button'

export default async function SiteHeader () {
  return (
    <header className='w-full fixed top-0 z-40 border-b bg-white/40 dark:bg-black/30 backdrop-blur-sm backdrop-saturate-200'>
      <div className='max-w-8xl h-16 sm:h-20 mx-auto px-4 flex items-center justify-between lg:px-8'>
        <Link
          href='/'
        >
          <Icons.Logoname className='w-auto h-9 fill-primary hidden sm:block' />
          <Icons.Logomark className='w-auto h-8 fill-primary block sm:hidden' />
        </Link>
        <div className='flex justify-end items-center gap-x-4'>
          <Button color='primary' radius='sm' size='md' className='hidden md:block'>
            Contáctanos
          </Button>
          <Button color='primary' radius='sm' size='sm' className='md:hidden'>
            Contáctanos
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
