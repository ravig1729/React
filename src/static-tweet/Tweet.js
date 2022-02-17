import React from 'react'
import Avatar from './Avatar'
import Message from './Message'
import Author from './Author'
import Time from './Time'
import Option from './Option'
import './index.css'

const Tweet = ({tweetData}) => {
  console.log(tweetData);
  return (
    <div className='tweet'>
        <Avatar hash = {tweetData.gravator}/>
        <div className='content'>
          <Author autor = {tweetData.author}/> 
          <Time time = {tweetData.timestamp}/>
          <Message text = {tweetData.message}/>
          <div className='buttons'>
            <Option />  
          </div>
        </div>
        
    </div>
  )
}



export default Tweet
