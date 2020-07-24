import React from 'react';
import Style from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {
    let postElements = props.postDate.map(el => {
        return <Post message={el.message} />
    });

    return (
        <div className={Style.root}>
            <h1 className={Style.title}>Мои записи</h1>
            <form action="" className={Style.form}>
                <textarea name="" id="" className={Style.input} placeholder="ваша лѣтопись..."></textarea>
                <button className={Style.submit}>Высѣчь ​рꙋны​</button>
            </form>
            <ul className={Style.list}>
                {postElements}
            </ul>

        </div>
    );
}

export default Posts;