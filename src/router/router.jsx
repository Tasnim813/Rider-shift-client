import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../page/Home/Home/Home";
import Coverage from "../page/Coverage/Coverage";

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
        }
    ]
  },
]);