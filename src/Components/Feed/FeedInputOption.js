import React from 'react';
import './Feed.css'

function FeedInputOption({ Icon, title, color }) {
  return (
    <div data-testid='inputOption' className='feed__inputOption'>
      <Icon style={{color: color}} />
      
      <h4 
        data-testid='inputOption-title' 
        className='feed__inputOption__title'
      >
        {title}
      </h4>
    </div>
  )
}

export default FeedInputOption;
