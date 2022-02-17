import React from 'react'
import Tweet from './static-tweet/Tweet'
 
const testTweet1 = {
  message : "Hello Maccha!",
  gravator : "xyz",
  author : {
      handle : "catperson",
      name : "Cat Person ABC"
  },
  likes : 2,
  retweet : 0,
  timestamp : "3 hr ago"
}
const testTweet2 = {
  message : "Good to see you!",
  gravator : "xyz",
  author : {
      handle : "catperson",
      name : "Cat Person ABC"
  },
  likes : 2,
  retweet : 0,
  timestamp : "3 hr ago"
}

const testTweet3 = {
  message : "How do you do?",
  gravator : "xyz",
  author : {
      handle : "catperson",
      name : "Cat Person ABC"
  },
  likes : 2,
  retweet : 0,
  timestamp : "3 hr ago"
}

const testTweet4 = {
  message : "How are your belongings?",
  gravator : "xyz",
  author : {
      handle : "catperson",
      name : "Cat Person ABC"
  },
  likes : 2,
  retweet : 0,
  timestamp : "3 hr ago"
}



export const App = () => {
  return (
    <div>
      <Tweet tweetData = {testTweet1}/>
      <Tweet tweetData = {testTweet2}/>
      <Tweet tweetData = {testTweet3}/>
      <Tweet tweetData = {testTweet4}/>
        
    </div>
  )
}



