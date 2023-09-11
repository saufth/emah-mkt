import { Icons } from '@/components/Icons'
// import { Button, Flex } from '@radix-ui/themes'
import { ThemeToggle } from './ThemeToggle'
import Link from 'next/link'
import { Button } from '../ui/Button'

export default async function SiteHeader () {
  return (
    <header className='w-full fixed top-0 z-40 border-b bg-white/30 dark:bg-black/20 backdrop-blur-sm backdrop-saturate-200'>
      <div className='max-w-8xl h-20 mx-auto px-4 flex items-center justify-between lg:px-8'>
        <Link
          href='/'
        >
          <Icons.Logoname className='w-auto h-9 fill-primary hidden sm:block' />
          <Icons.Logomark className='w-auto h-9 fill-primary block sm:hidden' />
        </Link>
        <div className='flex justify-end gap-x-4'>
          <Button className='highlight-white/20'>
            Contáctanos
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
