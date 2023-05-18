import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
            className={({isActive}) => (isActive ? classes.active : undefined)}
             to="/"
             end
             >Home</NavLink>
          </li>
          <li>
          <NavLink
             className={({isActive}) => (isActive ? classes.active : undefined)}
           to="/events"
           end
           >Events</NavLink>
          </li>
          {/* <li>
          <NavLink
             className={({isActive}) => (isActive ? classes.active : undefined)}
           to="/events/new"
           end
           >New Events</NavLink>
          </li> */}
          {/* <li>
          <NavLink 
           className={({isActive}) => (isActive ? classes.active : undefined)}
          to="/events/:id/edit"
          end
          >Edit</NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
