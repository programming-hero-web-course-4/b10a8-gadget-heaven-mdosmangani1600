import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import NavBar from "../NavBar/NavBar";


const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <div className="bg-purple-500 pb-80 text-white rounded-xl p-5">
            <NavBar></NavBar>
            <div className="text-center space-y-6 pb-5">
                <h4 className="font-bold text-5xl">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h4>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices <br /> to the coolest accessories, we have it all!</p>
                <button className="btn rounded-3xl text-purple-500">Shop Now</button>
            </div>
        </div>
        <div className='mx-auto -mt-80 '>
            <Banner></Banner>
        </div>
        <div></div>
        <div className="pt-40 ">
            <div className="text-center">
                <h3 className="font-bold text-4xl mb-10">Explore Cutting-Edge Gadgets</h3>
            </div>
            <div className="flex gap-6">
            <Categories categories={categories}></Categories>
            <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default Home;