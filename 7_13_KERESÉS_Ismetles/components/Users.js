//ide szintén Component 
import { Component } from 'react';

import User from './User';
import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class Users extends Component{
  //inicializáció:
  constructor(){
    /* constructor esetén MINIG MEG KELL HÍVNI A SUPER()-t*/
    super();
    /*inicializálunk egy objektumot
     amelyben lehet bármilyen értékeket tárolni 
     és ez a state-jelenlegi objektumunk*/
    //state nek kell hívni
    this.state={
      showUseres:false,
      stb:'Bármi'
    };
  }
    /************************* */
  toggleUsersHandler(){
    //setStatel({}) vagy setStatel(()) kell állítani az állapotot
    /*A setState ebben az esetben össze vonja az étékeket,
     és amely érékek nicsnenek meghívva azokat nem modosítja*/
    this.setState((curState) => {
      /*ellentétére fordítjuk a showUseres-t */
      return{ showUseres: !curState.showUseres};
    });
  }
  /************************* */
  render(){
  /************************* */
    const usersList = (
      <ul>
        {/* {DUMMY_USERS */}
        {this.props.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
  /************************* */
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
         {/*itt meghívjuk a jelenlegi értékét a statnek*/}
          {this.state.showUseres ? 'Hide' : 'Show'} Users
        </button>
         {/*csak akkor írja ki ha showUser igaz */}
        {this.state.showUseres && usersList}
      </div>
    );
  };
}


// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
