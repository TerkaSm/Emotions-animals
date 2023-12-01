import {createRoot} from 'react-dom/client'
import {HomePage} from './pages/HomePage'
import './global.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {App} from './components/App'
import {AnimalPage} from './pages/AnimalPage'
import {ChildPage} from './pages/ChildPage'
import {InfoPage} from './pages/InfoPage'
import {ErrorPage} from './pages/ErrorPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/hra',
				element: <ChildPage />,
			},
			{
				path: '/zviratko',
				element: <AnimalPage />,
			},
			{
				path: '/info',
				element: <InfoPage />,
			},
		],
	},
])

createRoot(document.querySelector('#app')).render(<RouterProvider router={router} />)
