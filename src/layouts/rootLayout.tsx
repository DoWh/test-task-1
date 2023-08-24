import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from '../components/AppHeader'

const RootLayout: FC = () => {
  return (
    <div>
      <AppHeader />
      <Outlet />
    </div>
  )
}

export default RootLayout
