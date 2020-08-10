import React from 'react';
import Style from './Users.module.css';
import User from './User/User';

let Users = (props) => {

  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  if (props.currentPage < 8) {
    for (let i = 1; i <= 15; i++) {
      pages.push(i);
    }
  } else if (props.currentPage > pageCount - 7) {
    for (let i = pageCount - 15; i <= pageCount; i++) {
      pages.push(i);
    }
  } else {
    for (let i = props.currentPage - 7; i <= props.currentPage + 7; i++) {
      pages.push(i);
    }
  }

  return (
    <div className={Style.root}>
      <h1 className={Style.title}>Пользователи</h1>
      {props.usersDate.map(el => {
        //debugger;
        return (
                  <User userId={el.id}
                  photoUrl={el.photos.small} 
                  followed={el.followed} 
                  followEvent={props.checkFollowEvent} 
                  name={el.name} 
                  status={el.status} 
                  city={"el.location.city"} 
                  country={"el.location.country"} 
                  followingInProgress={props.followingInProgress}/>
               );
      })}
      <div className={Style.usersNav}>
        {
          pages.map(p => {
            return (
                    <span className={props.currentPage === p && Style.selectedPage}
                    onClick={() => props.onPageChanged(p)}>{p}</span>
                   );
          })
        }
      </div>
    </div>
  );

};

export default Users;
