import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI, followAPI } from '../../api/api.js';

class UsersContainer extends React.Component {

  componentDidMount() {
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  }

  checkFollowEvent = (check, userId) => {
    if (!check) {
      this.props.toggleIsFetching(true);
      followAPI.follow(userId).then(data => {
        this.props.toggleIsFetching(false);
        if (data.resultCode === 0) {
          return this.props.follow(userId);
        }
      });
    }
    else {
      this.props.toggleIsFetching(true);
      followAPI.unfollow(userId).then(data => {
        this.props.toggleIsFetching(false);
        if (data.resultCode === 0) {
          return this.props.unfollow(userId);
        }
      });
    }
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          usersDate={this.props.usersDate}
          checkFollowEvent={this.checkFollowEvent}
          onPageChanged={this.onPageChanged} />
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
    isFetching: state.usersPage.isFetching
  };
};

export default connect(mapStateToProps, {
  follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersContainer);
