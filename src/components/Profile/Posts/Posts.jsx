import React from 'react';
import Style from './Posts.module.css';
import Post from './Post/Post';
import PostsForm from './PostsForm/PostsForm';

const Posts = (props) => {

    let postElements = props.postDate.map(el => {
        return (<Post message={el.message} />);
    });

    const onSubmit = (formData) => {
        props.addPost(formData.textPosts);
    };

    return (
        <div className={Style.root}>
            <h1 className={Style.title}>Мои записи</h1>
            <PostsForm onSubmit={onSubmit}/>
            <ul className={Style.list}>
                {postElements}
            </ul>

        </div>
    );
};

export default Posts;