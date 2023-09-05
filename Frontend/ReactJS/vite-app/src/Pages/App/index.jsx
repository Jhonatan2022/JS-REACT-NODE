import React from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import { Home } from '../Home';
import { SignIn } from '../SignIn';
import { Navbar } from '../../Components/Navbar';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { MyAccount } from '../MyAccount';
import { NotFound } from '../NotFound';


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes;
}


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </React.Fragment>
  )
}

export { App };