
import { Fragment } from "react";
import mealsImmages from "../../assets/meals.jpg";
import classes from "./Header.module.css"
import React from 'react';
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
    return (<Fragment>
        <header className={classes["header"]}>
            <h1>ReactMelas</h1>
            <HeaderCardButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImmages} alt="kajás kép"/>
        </div>
    </Fragment>)
}



export default Header