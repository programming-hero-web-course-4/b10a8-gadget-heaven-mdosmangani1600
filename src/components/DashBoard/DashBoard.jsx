import { NavLink, Outlet} from "react-router-dom";
import NavBar from "../NavBar/NavBar";





const DashBoard = () => {
    
    return (
        <div>
            <NavBar></NavBar>
            <div className="text-center space-y-5 bg-purple-600 text-white p-6 rounded-2xl">
                <h3 className="font-bold text-3xl">Dashboard</h3>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices <br /> to the coolest accessories, we have it all!</p>
                <div className="gap-5 justify-center flex ">
                    <button className="border rounded-2xl w-20 p-2"><NavLink to="/dashboard">Cart</NavLink></button>
                    <button className="border rounded-2xl w-20 p-2"><NavLink to="wishlist">Wishlist</NavLink></button>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoard;