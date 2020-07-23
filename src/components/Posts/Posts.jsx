import React from 'react';
import './Posts.css';

const Posts = () => {
    return (
        <div className="posts">
            <h1 className="title">Мои записи</h1>
            <form action="" className="add-post-form">
                <textarea name="" id="" className="post-input" placeholder="ваша лѣтопись..."></textarea>
                <button className="post-submit">Высѣчь ​рꙋны​</button>
            </form>
            <div className="new-post">
                <div className="post-icon"></div>
                <h2 className="post-text">Нꙋ гдѣ же ​всѣ​ славѧне?</h2>
            </div>
            <div className="new-post">
                <div className="post-icon"></div>
                <h2 className="post-text">​Сварогъ​ - богъ номеръ ѻдинъ! </h2>
            </div>
        </div>
    );
}

export default Posts;