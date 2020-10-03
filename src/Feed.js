import React from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';

function Feed() {
    return (
        <div className="feed">
            {/* Heder */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />

            {/* Posts */}
            <Post />
            
        </div>
    )
}

export default Feed;
