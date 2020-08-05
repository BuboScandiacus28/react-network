import Posts from './Posts';
import {addPostActionCreater, updateNewPostTextActionCreater} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
        return {
            postDate: state.profilePage.postDate,
            newPostText: state.profilePage.newPostText
        };
  };
  
  let mapDispatchToProps = (dispatch) => {
        return {
            addPostContainer: (e) => {
                dispatch(addPostActionCreater());
                e.preventDefault();
            },
            onPostChangeContainer: (text) => {
                dispatch(updateNewPostTextActionCreater(text));
            },
        };
  };
  
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;