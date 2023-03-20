// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
//Alternatív megoldás a NavLink

import classes from "./MainNavigator.module.css"


function MainNavigation(){
    return(
        <header className={classes.header}>
            <nav>
            <ul className={classes.list}>
            <li>
                <NavLink to="/" className={({isActive})=>
                (isActive ? classes.active : undefined)
                }
                style={({isActive})=>({color:isActive?'red':'yellow'})}
                end
                >Home</NavLink>
                {/* Különlegessége a Navlink, hogy a classNamebe meg lehet adni
                egy functiont.
                Ha objektumként hozzá adjuk az isActive boolent akkor 
                 */}
                 {/* Az end azért felelős, hogy a többi, /es dolog ne 
                 jelölje ki az összeset. */}
                 {/*Lehet a styba is ekkor ugyan ezt használni*/}
           </li>
            <li>
                <NavLink to="2" className={({isActive})=>
                (isActive ? classes.active : undefined)}>2</NavLink>
                </li>
                <li>
                <NavLink to="/products"
                className={({isActive})=> (isActive ? classes.active : undefined)}
                >Nem relatív products</NavLink>
                </li>
                <li>
                <NavLink to="products" 
                className={({isActive})=>(isActive ? classes.active : undefined)}
                >products</NavLink>
                </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;