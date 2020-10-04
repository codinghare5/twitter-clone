import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
const [tweetMessage, setTweetMessage] = useState('');
const [tweetImage, setTweetImage] = useState('');

const sendTweet = e => {
    e.preventDefault();
    // TODO: make it dynamic, depending on logged in user
    db.collection('posts').add({
        displayName: 'Marcin Mukosiej',
        username: 'marcinmukosiej',
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar: "https://www.flaticon.com/svg/static/icons/svg/560/560216.svg",
    });

    // some cleanup
    setTweetImage('');
    setTweetMessage('');
}

    return (
        <div className='tweetBox'>
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://www.flaticon.com/svg/static/icons/svg/560/560216.svg" />
                    <input
                        value={tweetMessage}
                        onChange={(e) => setTweetMessage(e.target.value)}
                        placeholder="What's happening?" 
                        type="text" 
                    />
                </div>
                    <input
                        value={tweetImage}
                        onChange={(e) => setTweetImage(e.target.value)}
                        className="twitterBox__imageInput" 
                        placeholder="Optional: Enter image URL" 
                        type="text" />
                        
                <Button 
                    onClick={sendTweet} 
                    type="submit" 
                    className="tweetBox__tweetButton" 
                >Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
