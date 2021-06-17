import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import Sitebar from './Sitebar/Sitebar';


const Navbar = (props) => {
  let friendsEl = props.state.friends.map( f => <Sitebar id={f.id} name={f.name} link={f.link}/>);

    return <nav className={s.nav}>
    <div>
      <NavLink to="/profile" className={s.item} activeClassName={s.activeLink}>
        Profile
      </NavLink>
    </div>
    <div>
      <NavLink to="/dialogs" className={s.item} activeClassName={s.activeLink}>
        Messages
      </NavLink>
    </div>
    <div>
      <NavLink to="/news" className={s.item} activeClassName={s.activeLink}>
        News
      </NavLink>
    </div>
    <div>
      <NavLink to="/music" className={s.item} activeClassName={s.activeLink} className={s.item}>
        Music
      </NavLink>
    </div>
    <div>
      <NavLink to="/settings" className={s.item} activeClassName={s.activeLink}>
        Settings
      </NavLink>
    </div>
    <div>
      <div className={s.onlineFriens}>
        Friends online
      </div>
        {friendsEl}
    </div>
  </nav>
}

export default Navbar;
