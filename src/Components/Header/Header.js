import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from '../HeaderOption/HeaderOption';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img className='header__img' src ='https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1643632761~hmac=db96d0b4738b1beac11d249de3f0c255' alt='' />

        <div className='header__search'>
          <SearchIcon />
          <input className='header__input' type='text' />
        </div>
      </div>

      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
      </div>

    </div>
  )
}

export default Header;
