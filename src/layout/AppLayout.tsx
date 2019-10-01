import { ReactChildren } from 'react'
import './app-layout.styl'

const AppLayout = ({ children }: { children: ReactChildren }): React.ReactElement => {
  return (
    <main className='app-layout'>
      {children}
    </main>
  )
}

export default AppLayout
