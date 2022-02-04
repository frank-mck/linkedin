import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import './Feed.css';
import FeedInputOption from './FeedInputOption';

function Feed() {
  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form className='feed__form'>
            <input className='feed__form__input' type='text' />
            <button className='feed__form__btn' type='submit'>Send</button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <FeedInputOption Icon={ImageIcon} title='Photo' color='#70b5f9' />
          <FeedInputOption Icon={SubscriptionsIcon} title='Video' color='#e7a33e' />
          <FeedInputOption Icon={EventNoteIcon} title='Event' color='#c0cbcd' />
          <FeedInputOption Icon={CalendarViewDayIcon} title='Write artitle' color='#7fc15e' />

        </div>
      </div>
    </div>
  )
}

export default Feed;
