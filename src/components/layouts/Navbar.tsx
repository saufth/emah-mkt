'use client'
import { Navbar as NavbarPrimitive, NavbarBrand, NavbarContent, NavbarItem, Link } from '@nextui-org/react'
import { Icons } from '@/components/Icons'
import { ThemeToggle } from '@/components/layouts/ThemeToggle'

export default function Navbar () {
  return (
    <NavbarPrimitive className='sm:py-2' maxWidth='xl'>
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
    </NavbarPrimitive>
  )
}
