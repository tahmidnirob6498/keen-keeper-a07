import { NavLink } from "react-router";
import { IoHomeOutline } from "react-icons/io5";
import { IoStatsChartOutline } from "react-icons/io5";      
import {IoCalendarOutline} from "react-icons/io5";


const Navbar = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><span className="text-primary">Keen</span>Keeper</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
        <li><NavLink to="/"><div className="flex items-center gap-2"><IoHomeOutline /><p>Home</p></div></NavLink></li>
      <li><NavLink to="/timeline"><div className="flex items-center gap-2"><IoCalendarOutline /><p>Timeline</p></div></NavLink></li>
      <li><NavLink to="/stats"><div className="flex items-center gap-2"><IoStatsChartOutline /><p>Stats</p></div></NavLink></li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;