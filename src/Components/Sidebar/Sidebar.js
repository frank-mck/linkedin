import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__top' >
        <img className='sidebar__img' src='data:image/jpeg;base64,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' alt='' />
        <Avatar className='sidebar__avatar' />
        <h2>Frank Mckenna</h2>
        <h4>frankmckenna@rocketmail.com</h4>
      </div>

      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2,591</p>
        </div>
        <div className='sidebar__stat'>
          <p>View on post</p>
          <p className='sidebar__statNumber'>2,448</p>
        </div>
      </div>

      <div className='sidebar__bottom'>
        <p>Recent</p>
      </div>
    </div>
  )
}

export default Sidebar;
