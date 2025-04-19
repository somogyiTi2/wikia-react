import classes from './User.module.css';
//az osztály komponens működésért felelős
import { Component } from 'react';


//Osztályt készítése kiterjeszés a Componentre 
class User extends Component {
  // constructor() Inicializálja a benne találhtó elemeket
  // constructor() {
    //Render vissz tud küldeni eredményt
    render() {
      // vissza adott érték
      //this. kiegészít
      return <li className={classes.user}>{this.props.name}</li>;
    }
  }


// const User = (props) => {
//   <li className={classes.user}>{props.name}</li>;
// };

export default User;
