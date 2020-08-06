import React from 'react';
import Style from './Users.module.css';
import User from './User/User';

const Users = (props) => {
  if (props.usersDate.length == 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: 'https://i.pinimg.com/736x/b6/f5/88/b6f588e5b4b9a2625fa5532eaec733d1.jpg',
        followed: true,
        fullName: 'Dmirty',
        status: 'I am a boss',
        location: {
          city: 'Kiev',
          country: 'Ukraine'
        }
      },
      {
        id: 2,
        photoUrl: 'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg',
        followed: false,
        fullName: 'Maks',
        status: 'Holla',
        location: {
          city: 'Lvive',
          country: 'Ukraine'
        }
      },
      {
        id: 3,
        photoUrl: 'https://i.pinimg.com/736x/70/ae/ed/70aeed769408dede74aaf1818bd3bb32.jpg',
        followed: true,
        fullName: 'Pavel',
        status: 'What are you doing?',
        location: {
          city: 'Lugansk',
          country: 'Ukraine'
        }
      },
    ]);
  }

  let checkFollowEvent = (check) => {
    if (!check) return props.follow;
    else return props.unfollow;
  };

  let usersElements = props.usersDate.map(el => {
    return (<User userId={el.id} photoUrl={el.photoUrl} followed={el.followed} followEvent={checkFollowEvent(el.followed)} fullName={el.fullName} status={el.status} city={el.location.city} country={el.location.country} />);
  });

  return (
    <div className={Style.root}>
      <h1 className={Style.title}>Пользователи</h1>
      {usersElements}
    </div>
  );
};

export default Users;
