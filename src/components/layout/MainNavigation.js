import { NavLink } from 'react-router-dom';

import styles from './MainNavigation.module.css';

const MainNavigation = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Quests</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to="/quotes">
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/newQuote">
              Add Quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
