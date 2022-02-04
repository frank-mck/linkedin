import React from 'react';
import './Feed.css'

function FeedInputOption({ Icon, title, color }) {
  return (
    <div className='feed__inputOption'>
      <Icon style={{color: color}} />
      <h4 className='feed__inputOption__title'>{title}</h4>
    </div>
  )
}

export default FeedInputOption;
