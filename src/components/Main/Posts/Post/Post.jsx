import React from 'react';
import Style from './Post.module.css';

const Post = () => {
    return (
        <li className={Style.item}>
            <div className={Style.icon}></div>
            <h2 className={Style.text}>Нꙋ гдѣ же ​всѣ​ славѧне?</h2>
        </li>
    );
}

export default Post;