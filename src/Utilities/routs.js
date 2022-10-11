import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Main from "../components/layouts/Main";

import ErrorPage from "../components/ErrorPage";
import QuizDetails from "../components/QuizDetails/QuizDetails";

import Blog from "../components/Blog/Blog";
import Statics from "../components/Statics.js/Statics";


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
            path: '/card/:cardId',
            loader: async ({params})=> {
                return fetch(`https://openapi.programming-hero.com/api/quiz/${params.cardId}`)
            },
            element: <QuizDetails></QuizDetails>
        },
        {
            path: '/statics',
            element: <Statics></Statics>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },

    ]
  },
])

export default router