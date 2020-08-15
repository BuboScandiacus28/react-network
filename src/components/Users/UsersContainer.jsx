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

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsersTh(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

    this.props.getUsersTh(pageNumber, this.props.pageSize);
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          usersDate={this.props.usersDate}
          checkFollowEvent={this.props.checkFollowEvent}
          onPageChanged={this.onPageChanged} 
          followingInProgress={this.props.followingInProgress}/>
      </>
    );
  }

};

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



export default compose(
  connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, 
    toggleFollowingInProgress, getUsersTh, checkFollowEventTh
  }),
  withAuthRedirect
)(UsersContainer);
