
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root';
import Home from '../Pages/Home/Home';
import Product from '../Pages/product/Product';
import Cart from '../Pages/cart/Cart';
import CheckOut from '../Pages/checkout/CheckOut';
import Landing from '../Pages/landing/Landing';
import Category from '../Pages/category/Category'
import AllCategory from '../Pages/allCategory/AllCategory';
import Login from '../Pages/login/Login';
import Registration from '../Pages/registration/Registration';

const Route = createBrowserRouter([
    {
        Route: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/product",
                element: <Product/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/checkout",
                element: <CheckOut/>
            },
            {
                path: "/landing",
                element: <Landing />
            },
            {
                path: "/category",
                element: <Category/>
            },
            {
                path: "/allCategory",
                element: <AllCategory/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/registration",
                element: <Registration/>
            }
        ]
    }
])

export default Route;