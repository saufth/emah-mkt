import SiteHeader from '@/components/layouts/SiteHeader'

import type { LayoutProps } from '@/types'

export default async function LobbyLayout ({ children }: LayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className='h-[300vh]'>
        {children}
      </main>
    </>
  )
}
