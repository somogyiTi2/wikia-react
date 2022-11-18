import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';

import classes from './Navigation.module.css';

const Navigation = (/*props*/ ) => {
  const ctx = useContext(AuthContext);
  return (<nav className={classes.nav}>
    <ul>
      {/*prpos.*/ctx.isLoggedIn && (
        <li>
          <a href="/">Users</a>
        </li>
      )}
      {/*prpos.*/ctx.isLoggedIn && (
        <li>
          <a href="/">Admin</a>
        </li>
      )}
       {/*prpos.*/ctx.isLoggedIn && (
        <li>
          <button onClick={
            // props
            ctx.onLogout}>Logout</button>
        </li>
      )}
    </ul>
  </nav>)
  // MÁSIK VÁLTOZATA:
  // return (
  //   <AuthContext.Consumer>
  //     {(ctx) => {
  //       return (<nav className={classes.nav}>
  //         <ul>
  //           {props.isLoggedIn && (
  //             <li>
  //               <a href="/">Users</a>
  //             </li>
  //           )}
  //           {ctx.isLoggedIn && (
  //             <li>
  //               <a href="/">Admin</a>
  //             </li>
  //           )}
  //           {ctx.isLoggedIn && (
  //             <li>
  //               <button onClick={props.onLogout}>Logout</button>
  //             </li>
  //           )}
  //         </ul>
  //       </nav>)
  //     }}
};

export default Navigation;
