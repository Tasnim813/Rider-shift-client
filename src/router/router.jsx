import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../page/Home/Home/Home";
import Coverage from "../page/Coverage/Coverage";
import AuthLayout from "../layout/AuthLayout";
import Login from "../page/auth/Login/Login";
import Register from "../page/auth/Register/Register";
import BeRider from "../page/BeRider/BeRider";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index:true,
            Component: Home,

        },
        {
            path:'/coverage',
            Component: Coverage,
            loader:()=> fetch('/servicecenter.json').then(res=>res.json())
        },
        {
          path:'/beRider',
          element : <PrivateRoute><BeRider></BeRider> </PrivateRoute>
        }
    ]
  },
  {
    path:"/",
    element : <AuthLayout></AuthLayout>,
    children:[
      {
        path:'login',
        Component : Login
      },
      {
        path:'register',
        Component :Register
        
      }
    ]
  }
]);