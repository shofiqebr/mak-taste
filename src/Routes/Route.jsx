
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root';
import Home from '../Pages/Home/Home';

const Route = createBrowserRouter([
    {
        Route: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home/>
            }
        ]
    }
])

export default Route;