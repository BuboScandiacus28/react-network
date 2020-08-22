import React from 'react';
import Style from './Posts.module.css';
import Post from './Post/Post';
import PostsForm from './PostsForm/PostsForm';

const Posts = ({postDate, addPost}) => {

    let postElements = postDate.map((el, index) => <Post key={index} message={el.message} />);

    const onSubmit = (formData) => {
        addPost(formData.textPosts);
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