import Home from './Pages/home'
import Shop from './Pages/shop'
import { createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/TechWorld',
    element: <Home />
  },
  {
    path: 'shop',
    element: <Shop />
  }
])
export default router
