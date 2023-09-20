'use client'
// Components
import { Button } from '@nextui-org/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
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
      <SunIcon
        className='h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
        aria-hidden='true'
      />
      <MoonIcon
        className='absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
        aria-hidden='true'
      />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
