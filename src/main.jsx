import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <div className='font-Poppins'>
        <RouterProvider router={routes} />
        </div>
        <Toaster/>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)


