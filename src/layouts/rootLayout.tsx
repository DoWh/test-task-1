import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout: FC = () => {
	return (
		<div>
			<Outlet />
		</div>
	)
}

export default RootLayout
