import React from 'react';
import Style from './Users.module.css';
import User from './User/User';
import * as axios from 'axios';

class Users extends React.Component {

   //this.usersElements = 

  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  checkFollowEvent = (check) => {
    if (!check) return this.props.follow;
    else return this.props.unfollow;
  };

  render() {
    return (
      <div className={Style.root}>
        <h1 className={Style.title}>Пользователи</h1>
        {this.props.usersDate.map(el => {
          //debugger;
          return (<User userId={el.id} photoUrl={el.photos.small} followed={el.followed} followEvent={this.checkFollowEvent(el.followed)} name={el.name} status={el.status} city={"el.location.city"} country={"el.location.country"} />);
        })}
      </div>
    );
  }

};

export default Users;
