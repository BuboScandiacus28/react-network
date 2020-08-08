import Posts from './Posts';
import {addPost, updateNewPostText} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        postDate: state.profilePage.postDate,
        newPostText: state.profilePage.newPostText
    };
};

const PostsContainer = connect(mapStateToProps, {
    addPost, updateNewPostText
})(Posts);

export default PostsContainer;