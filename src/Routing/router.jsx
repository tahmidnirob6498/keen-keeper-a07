import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout"
import Home from "../Pages/Home";
import TimeLine from "../Components/TimeLine";
import Stats from "../Components/Stats";
import ErrorPage from "../Components/ErrorPage";
import FriendsDetails from "../Components/FriendsDetails";
import Loading from "../Components/Loading";

const router=createBrowserRouter([
{
    path:"/",
 Component:RootLayout,
 errorElement:<ErrorPage></ErrorPage>,
 hydrateFallbackElement:<Loading></Loading>,
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