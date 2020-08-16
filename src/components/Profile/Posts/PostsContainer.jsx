import Posts from './Posts';
import {addPost} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        postDate: state.profilePage.postDate,
    };
};

const PostsContainer = connect(mapStateToProps, {
    addPost
})(Posts);

export default PostsContainer;