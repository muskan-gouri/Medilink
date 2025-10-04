import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Doctors from '@/pages/Doctors'
import Login from '@/pages/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'doctors', element: <Doctors /> },
    ],
  },
  { path: '/login', element: <Layout />, children: [{ index: true, element: <Login /> }] },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
