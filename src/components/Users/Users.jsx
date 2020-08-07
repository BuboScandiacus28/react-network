import React from 'react';
import Style from './Users.module.css';
import User from './User/User';
import * as axios from 'axios';



class Users extends React.Component {

  //this.usersElements = 

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
    
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
    });
  }

  checkFollowEvent = (check) => {
    if (!check) return this.props.follow;
    else return this.props.unfollow;
  };

  render() {
    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    if (this.props.currentPage < 8) {
      for (let i = 1; i <= 15; i++) {
        pages.push(i);
      }
      debugger;
    } else if (this.props.currentPage > pageCount - 7) {
      for (let i = pageCount - 15; i <= pageCount; i++) {
        pages.push(i);
      }
      debugger;
    } else {
      for (let i = this.props.currentPage - 7; i <= this.props.currentPage + 7; i++) {
        pages.push(i);
      }
      debugger;
    }

    return (
      <div className={Style.root}>
        <h1 className={Style.title}>Пользователи</h1>
        {this.props.usersDate.map(el => {
          //debugger;
          return (<User userId={el.id} photoUrl={el.photos.small} followed={el.followed} followEvent={this.checkFollowEvent(el.followed)} name={el.name} status={el.status} city={"el.location.city"} country={"el.location.country"} />);
        })}
        <div className={Style.usersNav}>
          {
            pages.map(p => {
            return (<span className={this.props.currentPage === p && Style.selectedPage}
                    onClick={() => {this.onPageChanged(p)}}>{p}</span>)
            })
          }
        </div>
      </div>
    );
  }

};

export default Users;
