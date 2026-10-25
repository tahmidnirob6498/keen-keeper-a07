import { Suspense, use } from "react";
import Banner from "../Components/Banner";
import FriendCart from "../Components/FriendCart";
const friendsApi=fetch("/friendsData.json").then(res=>res.json())
const Home = () => {
    const friends=use(friendsApi)
    return (
        <div>
  <Suspense>
           <Banner></Banner> 
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {
            friends.map(friend=><FriendCart friend={friend}></FriendCart>)
            }
        </div>
  </Suspense>
        </div>
    );
};

export default Home;