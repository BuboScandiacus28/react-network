import React from 'react';
import Style from './Users.module.css';
import User from './User/User';
import Paginator from '../common/Paginator/Paginator';

let Users = ({usersDate, checkFollowEvent, followingInProgress, totalUsersCount, pageSize, currentPage, onPageChanged}) => {

  let userElements = usersDate.map(el => <User  key={el.id} userId={el.id} photoUrl={el.photos.small} 
                                                followed={el.followed} followEvent={checkFollowEvent} name={el.name} 
                                                status={el.status} city={"el.location.city"} country={"el.location.country"} 
                                                followingInProgress={followingInProgress}/>
  );

  return (
    <div className={Style.root}>
      <h1 className={Style.title}>Пользователи</h1>
      {userElements}
      
      <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />
    </div>
  );

};

export default Users;
