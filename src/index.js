import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import './index.css';



// Avatar Component
function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img 
      src={url}
      className='avatar'
      alt='Avatar' />
  );
}
// Message Component
function Message({ text }) {
  return (
    <div className='message'>
      { text }
    </div>
  );
}
// Author Component
function Author({ author }) {
  return (
    <span className='author'>
      <span className='name'>{author.name}</span>
      <span className='handle'>@{author.handle}</span>
    </span>
  );
}
// Show Time Component
const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (
    <span className='time'>
      {timeString}
    </span>
  );
};
function getRetweetCount(count) {
  if (count > 0) {
    return (
      <span className='retweet-count'>
        {count}
      </span>
    );
  } else {
    return null;
  }
}
// Reply Button Component
const ReplyButton = () => (
  <i className='fa fa-reply reply-button' />
);
// Rewteet Button Component
const Retweet = ({ count }) => (
  <span className='retweet-button'>
    <i className='fa fa-retweet' />
    {getRetweetCount(count)}
  </span>
);
// Like Button Component
const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart"/>
    {count > 0 &&
    <span className="like-count">
    {count} </span>}
  </span> 
);
// More Options Buttons Component
const MoreOptionsButton = () => (
  <i className='fa fa-ellipsis-h more-options-button'/>
);

function Comment({ author, message, likes }) {
  return (
    <div>
      <div className='author'>{author}</div>
      <div className='message'>{message}</div>
      <div className='likes'>
        { likes > 0 ? likes : 'No' } likes
      </div>
    </div>
  );
}

function Tweet({ tweet }) {
  return (
    <div className='tweet'>
      <Avatar hash={tweet.gravatar}/>
      <div className='content'>
        <Author author={tweet.author}/> <Time time={tweet.timestamp}/>
        <Message text={tweet.message}/>
        <div className='buttons'>
          <ReplyButton />
          <Retweet count={tweet.retweets}/>
          <LikeButton count={tweet.likes}/>
          <MoreOptionsButton />
        </div>
        <Comment author='somebody' message='a likable message' likes={1}/>
        <Comment author='mr_unpopular' message='unlikable message'/>
        {/* <Comment author='mr_unpopular' message='another message' likes={0}/> */}
        {/* <Comment author='error_missing_message'/> */}
        {/* <Comment message='mystery author'/> */}
      </div>
    </div>
  );
}
// Comment.propTypes = {
//   message: PropTypes.string.isRequired, author: PropTypes.string.isRequired, likes: PropTypes.number
//   }
Comment.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  likes: PropTypes.number
}

const testTweet = {
  message: "Something about cats.", gravatar: "xyz",
  author: {
  handle: "catperson",
  name: "IAMA Cat Person" },
  likes: 2,
  retweets: 2,
  timestamp: "2016-07-30 21:24:37"
};

ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'));