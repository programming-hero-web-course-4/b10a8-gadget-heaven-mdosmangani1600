import { Link, NavLink} from "react-router-dom";


const Categories = ({categories}) => {
    
    return (
        <div>
            <ul className="menu border rounded-box w-56 gap-5">
               <li className="bg-slate-100 rounded-xl"> <NavLink to="/">All Products</NavLink></li>
            {
                categories.map(category => (<li className="bg-slate-100 rounded-xl"><NavLink key={category.category} to={`/category/${category.category}`}>{category.category}</NavLink></li>))
            }
            </ul>
        </div>
    );
};

export default Categories;