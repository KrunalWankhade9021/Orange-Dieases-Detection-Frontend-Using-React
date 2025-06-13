import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DiseaseDetection from './Models/UploadPage.jsx'
import Form from './Models/Form.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Step 1: Create the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path:'/upload',
    element:<DiseaseDetection/>
  },
  {
    path:'/form',
    element:<Form/>
  }
])

// Step 2: Render the RouterProvider with the router
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
