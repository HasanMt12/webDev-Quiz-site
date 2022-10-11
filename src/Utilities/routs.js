import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";

import Main from "../components/layouts/Main";
import Chart from "../components/Chart"
import ErrorPage from "../components/ErrorPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path: '/',
            loader: async ()=>{
                return fetch('https://openapi.programming-hero.com/api/quiz')
            },
            element: <Home></Home>,
        },
        {
            path: '/Chart',
            element: <Chart></Chart>
        }
    ]
  },
])

export default router