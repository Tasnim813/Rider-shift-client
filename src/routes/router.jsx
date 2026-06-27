import { createBrowserRouter } from "react-router";
import Rootlayout from "../layout/Rootlayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";

export const router=createBrowserRouter([
    {
        path:"/",
        element :<Rootlayout></Rootlayout>,
        children:[
            {
                index:true,
                Component : Home,
            },
            {
                path:'/coverage',
                Component: Coverage,
                loader : ()=>fetch('./servicecenter.json').then(res=>res.json())
            
              
            },
            {
                path:'/beARider',
                element: <PrivateRoute><Rider></Rider> </PrivateRoute>
            },
            {
                path:"/sendParcel",
                element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>
            }
        ]

        
    },
    {
        path:'/',
        Component: AuthLayout,
        children:[
            {
                path:'login',
                Component: Login,
            },
            {
                path:"register",
                Component: Register,

            }
        ]
    }
]);