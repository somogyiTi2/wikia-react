import { Link } from "react-router-dom";

import classes from "./MainNavigator.module.css"

function MainNavigation(){
    return(
        <header className={classes.header}>
            <nav>
            <ul className={classes.list}>
            <li>
                <Link to="/">Home</Link>
           </li>
            <li>
                <Link to="2">2</Link>
                </li>
              
                <li>
                <Link to="products">products</Link>
                </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;