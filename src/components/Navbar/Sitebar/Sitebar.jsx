import React from 'react';
import s from './Sitebar.module.css';
import { NavLink } from 'react-router-dom';

const Sitebar = (props) => {
  return <nav className={s.nav}>

    <div>
      <NavLink to={`/${props.id}`} className={s.item} activeClassName={s.activeLink}>
        <img className={s.img} src={props.link}/>
        <span className={s.name}>
          {props.name}
        </span>
      </NavLink>
    </div>
    
  </nav>
}

export default Sitebar;
