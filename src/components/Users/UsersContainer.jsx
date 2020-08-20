import React from 'react';
import { connect } from 'react-redux';
import { 
  follow, unfollow, setCurrentPage, 
  toggleFollowingInProgress, getUsersTh, checkFollowEventTh
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {getUsersSuper, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from '../../redux/users-selectors';

class UsersContainer extends React.Component {

  componentDidMount() {
    let {currentPage, pageSize} = this.props;
    this.props.getUsersTh(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    
    let {pageSize} = this.props;

    this.props.getUsersTh(pageNumber, pageSize);
  }
  
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          usersDate={this.props.usersDate}
          checkFollowEvent={this.props.checkFollowEventTh}
          onPageChanged={this.onPageChanged} 
          followingInProgress={this.props.followingInProgress}/>
      </>
    );
  }

};

/*
let mapStateToProps = (state) => {
  return {
    usersDate: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  };
};
*/

let mapStateToProps = (state) => {
  return {
    usersDate: getUsersSuper(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  };
};



export default compose(
  connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, 
    toggleFollowingInProgress, getUsersTh, checkFollowEventTh
  }),
  withAuthRedirect
)(UsersContainer);
