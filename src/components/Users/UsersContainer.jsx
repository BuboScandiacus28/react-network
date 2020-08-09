import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/users-reducer';
import Users from './Users';
import * as axios from 'axios';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

  //this.usersElements = 

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
      withCredentials: true
    }).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
      withCredentials: true
    }).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.data.items);
    });
  }

  checkFollowEvent = (check, userId) => {
    if (!check) {
      this.props.toggleIsFetching(true);
      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
        withCredentials: true,
        headers: {
          "API-KEY": "c9ae8fe3-1df5-4182-85a6-347d10a3f515"
        }
      }).then(response => {
        this.props.toggleIsFetching(false);
        if (response.data.resultCode === 0) {
          debugger;
          return this.props.follow(userId);
        }
      });
    }
    else {
      this.props.toggleIsFetching(true);
      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
        withCredentials: true,
        headers: {
          "API-KEY": "c9ae8fe3-1df5-4182-85a6-347d10a3f515"
        }
      }).then(response => {
        this.props.toggleIsFetching(false);
        if (response.data.resultCode === 0) {
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
