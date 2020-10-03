import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://www.flaticon.com/svg/static/icons/svg/560/560216.svg" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>Marcin Mukosiej
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" />@marcinmukosiej
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenge you to build a Twitter clone with React.js</p>
                    </div>
                </div>
                <img src="https://media1.tenor.com/images/dd2d34bdab4eca7f3e68a3a0db16f066/tenor.gif?itemid=8380992" alt="" />
                <div className="post__footer">
                    <Button>
                        <ChatBubbleOutlineIcon fontSize="small" />
                    </Button>
                    <Button>
                        <RepeatIcon fontSize="small" />
                    </Button>
                    <Button>
                        <FavoriteBorderIcon fontSize="small" />
                    </Button>
                    <Button>
                        <PublishIcon fontSize="small" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Post;
