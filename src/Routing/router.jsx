import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout"
import Home from "../Pages/Home";
import TimeLine from "../Components/TimeLine";
import Stats from "../Components/Stats";
import ErrorPage from "../Components/ErrorPage";
import FriendsDetails from "../Components/FriendsDetails";

const router=createBrowserRouter([
{
    path:"/",
 Component:RootLayout,
 errorElement:<ErrorPage></ErrorPage>,
 children:[
    {
        index:true,
        Component:Home
    },
    {
        path:"/timeline",
        Component:TimeLine
    },
    {
        path:"/stats",
        Component:Stats
    },
    {
        path:"/friendDetails/:id",
        Component:FriendsDetails
    }
 ]
}


])
export default router;