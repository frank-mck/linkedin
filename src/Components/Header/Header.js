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
    <div data-testid='header' className='header'>
      <div data-testid='headerLeft' className='header__left'>
        <img className='header__img' src ='https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1643632761~hmac=db96d0b4738b1beac11d249de3f0c255' alt='' />

        <div className='header__search'>
          <SearchIcon />
          <input data-testid='headerInput' className='header__input' type='text' />
        </div>
      </div>

      <div data-testid='headerRight' className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar='https://user-images.githubusercontent.com/77457834/151813836-0308663c-7775-406a-a58b-442c63c29144.png' title='me' />
      </div>

    </div>
  )
}

export default Header;
