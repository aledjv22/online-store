import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import SignUp from '../SignUp'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/online-store/',element: <Home/>},
    {path: '/online-store/clothes',element: <Home/>},
    {path: '/online-store/electronics',element: <Home/>},
    {path: '/online-store/furnitures',element: <Home/>},
    {path: '/online-store/toys',element: <Home/>},
    {path: '/online-store/others',element: <Home/>},
    {path: '/online-store/my-account',element: <MyAccount/>},
    {path: '/online-store/my-order',element: <MyOrder/>},
    {path: '/online-store/my-orders',element: <MyOrders/>},
    {path: '/online-store/my-orders/last',element: <MyOrder/>},
    {path: '/online-store/my-orders/:id',element: <MyOrder/>},
    {path: '/online-store/sign-in',element: <SignIn/>},
    {path: '/online-store/sign-up',element: <SignUp/>},
    {path: '/online-store/*',element: <NotFound/>},
  ])
  return routes
}

const App =() => {  
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <AppRoutes/>
        <Navbar/>
        <CheckoutSideMenu/>
      </ShoppingCartProvider>
    </BrowserRouter>
  )
}

export default App