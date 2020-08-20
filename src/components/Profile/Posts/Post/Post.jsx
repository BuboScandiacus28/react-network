import React from 'react';
import Style from './Post.module.css';

const Post = ({message}) => {
    return (
        <li className={Style.item}>
            <div className={Style.icon}></div>
            <h2 className={Style.text}>{message}</h2>
        </li>
    );
};

export default Post;