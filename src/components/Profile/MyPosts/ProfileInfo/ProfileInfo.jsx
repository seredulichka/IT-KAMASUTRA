import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <img className={s.image} src='https://static.lostfilm.tv/Images/119/Posters/poster.jpg'/>
      <div className={s.describtionBlock}>
        ava + describtion
      </div>
    </div>
  )
}

export default ProfileInfo;
