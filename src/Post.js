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
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>{displayName}
                            <span className="post__headerSpecial">
                                {verified && <VerifiedUserIcon className="post__badge" />}@{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="" />
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
