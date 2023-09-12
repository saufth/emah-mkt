import Navbar from '@/components/layouts/Navbar'

import type { LayoutProps } from '@/types'

export default async function LobbyLayout ({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className='h-[300vh]'>
        {children}
      </main>
    </>
  )
}
