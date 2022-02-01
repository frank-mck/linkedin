import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@material-ui/core';

function HeaderOption({ Icon, title, avatar }) {
  return (
    <div data-testid='headerOption' className='headerOption'>
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && (
        <Avatar className='headerOption__icon' src={avatar} />
      )}
      <h3 data-testid='headerOptionTitle' className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption;
