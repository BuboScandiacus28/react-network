import React from 'react';
import Posts from './Posts';

let addPostActionCreater = () => {
    return {
        type: 'ADD-POST'
    }
};

let updateNewPostTextActionCreater = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
};

const PostsContainer = (props) => {

    let state = props.store.getState();

    let addPostContainer = (e) => {
        props.store.dispatch(addPostActionCreater());
        e.preventDefault();
    };

    let onPostChangeContainer = (text) => {
        let action = updateNewPostTextActionCreater(text);
        props.store.dispatch(action);
    };

    return (
        <Posts addPostContainer={addPostContainer} onPostChangeContainer={onPostChangeContainer} postDate={state.profilePage.postDate} newPostText={state.profilePage.newPostText}/>
    );
}

export default PostsContainer;