import { ReactChildren } from 'react'
import './app-layout.styl'

const AppLayout = ({ children }: { children: ReactChildren }) => {
  return (
    <main className='app-layout'>
      {children}
    </main>
  )
}

export default AppLayout
