import React from 'react';
import Style from './Posts.module.css';
import Post from './Post/Post';
import PostsForm from './PostsForm/PostsForm';

const Posts = ({postDate, addPost}) => {

    let postElements = postDate.map(el => <Post message={el.message} />);

    const onSubmit = (formData) => {
        addPost(formData.textPosts);
    };

    console.log('Render');

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