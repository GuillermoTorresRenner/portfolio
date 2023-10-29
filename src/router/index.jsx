import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Expertise from "../pages/Expertise";
import Projects from "../pages/Projects";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import Contact from "../pages/Contact";

export const router= createBrowserRouter([
{
    path:"/",
    element:<LayoutPublic/>,
    errorElement:<NotFound/>,
    children:[

{
    index:true,
    element:<Home/>,
},
{
    path:"/about",
    element:<About/>,
},
{
    path:"/expertise",
    element:<Expertise/>,
},
{
    path:"/projects",
    element:<Projects/>,
},
{
    path:"/contact",
    element:<Contact/>,
},



    ]
},
])