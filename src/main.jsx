import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// pages 
import App from './App.jsx'
import Dashboard from './pages/dashboard.jsx';
import DashboardSidePage from './components/dashboardSidePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement : <>hello word !!!!error</>,
    children : [
      {index : true, element: <App/>},
      {
        path : 'dashboard',
        element : <Dashboard/>,
        // errorElement : <>error Happened2</>,
        children:[
          {
            errorElement : <>error happened3</>,
            children : [
              {
                path : "user",
                element : <DashboardSidePage/>
              },
              {
                path : "user2",
                element : <p>user wor22222ld</p>
              },
              {
                index : "true",
                element: <>Dashboard</>
              }
            ]
          }
        ]
      }
    ],
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
