'use client'
// Components
import { Button } from '@nextui-org/button'
import { Icons } from '@/components/Icons'
// Hooks
import { useTheme } from 'next-themes'

export function ThemeToggle () {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      isIconOnly
      variant='light'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Icons.Sun
        className='h-6 w-auto rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
        aria-hidden='true'
        stroke={1.5}
      />
      <Icons.MoonStar
        className='absolute h-6 w-auto rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
        aria-hidden='true'
        stroke={1.5}
      />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
