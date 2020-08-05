import React from 'react';
import Style from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {
    
    let postElements = props.postDate.map(el => {
        return (<Post message={el.message} />);
    });

    let addPost = (e) => {
        props.addPostContainer(e);
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.onPostChangeContainer(text);
    };

    return (
        <div className={Style.root}>
            <h1 className={Style.title}>Мои записи</h1>
            <form action="" className={Style.form}>
                <textarea onChange={onPostChange} value={props.newPostText} className={Style.input} placeholder="ваша лѣтопись..."></textarea>
                <button onClick={addPost} className={Style.submit}>Высѣчь ​рꙋны​</button>
            </form>
            <ul className={Style.list}>
                {postElements}
            </ul>

        </div>
    );
};

export default Posts;