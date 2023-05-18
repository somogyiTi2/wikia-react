import { NavLink, Form, useRouteLoaderData } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';

function MainNavigation() {
  const token = useRouteLoaderData('root');
  //https://reactrouter.com/en/main/hooks/use-route-loader-data
  //Ez a hook az aktuálisan megjelenített útvonalak adatait bárhol elérhetővé teszi a fában. Ez hasznos a fa mélyén lévő komponensek számára, amelyeknek sokkal feljebb lévő útvonalak adataira van szükségük, valamint a szülőútvonalaknak, amelyeknek a fában mélyebben lévő gyermekútvonalak adataira van szükségük.
  //id:"root", a App.js -be azért működik.
  //A loader értékét át tudja adni az id:rootal és így a useRoutLoaderData() tudja értelmezni
  console.log(token);
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
          {!token && (
            <li>
              <NavLink
                to="/auth?mode=login"
                // ezzl autómatikusan a login adjuk meg (ez a AuthForm-ba van levezetve)
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Authentication
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <Form action="/logout" method="post">
                <button>Logout</button>
              </Form>
            </li>
          )}
        </ul>

      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
