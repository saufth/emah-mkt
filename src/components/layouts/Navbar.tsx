'use client'
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, Link } from '@nextui-org/react'
import { Icons } from '@/components/Icons'
import { ThemeToggle } from '@/components/layouts/ThemeToggle'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'

export default function Navbar () {
  const { scrollY } = useScroll()
  const [isOnTop, setIsOnTop] = useState(true)

  useMotionValueEvent(scrollY, 'change', (latestScrollY) => {
    setIsOnTop(latestScrollY > 0)
  })

  return (
    <NextUINavbar className='py-1 sm:py-2 bg-black/0' maxWidth='2xl' isBordered={isOnTop}>
      <NavbarBrand>
        <Link href='/'>
          <Icons.Logoname className='w-auto h-9 fill-primary hidden sm:block' />
          <Icons.Logomark className='w-auto h-8 fill-primary block sm:hidden' />
        </Link>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='#' aria-current='page'>
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  )
}
