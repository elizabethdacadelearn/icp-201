import {Link, useNavigate} from "react-router-dom"
import { useAuth } from "../auth/auth";
const NavBar = () => {
    const { isAuthenticated, login, principal, logout } = useAuth();
    const router=useNavigate();
    if(!isAuthenticated){
        router("/")
    }
    return (
        <div className="flex justify-between">
            <h1 className="font-bold text-xl">EMV </h1>
            <div className="flex space-x-3 items-center">
                <Link to="/home">Companies Created</Link>
                <Link to="/create">Create Company</Link>
                <button className="border bg-purple-400 p-2 rounded-md" onClick={logout}>Logout</button>
            </div>
        </div>
      );
}
 
export default NavBar;