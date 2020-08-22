import React from 'react';
import Style from './Paginator.module.css';

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

  let pageCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  if (currentPage < 8) {
    for (let i = 1; i <= 15; i++) {
      pages.push(i);
    }
  } else if (currentPage > pageCount - 7) {
    for (let i = pageCount - 15; i <= pageCount; i++) {
      pages.push(i);
    }
  } else {
    for (let i = currentPage - 7; i <= currentPage + 7; i++) {
      pages.push(i);
    }
  }

  pages = pages.map(p => 
    <span key={currentPage} className={currentPage === p && Style.selectedPage} onClick={() => onPageChanged(p)}>
      {p}
    </span>
  );

  return (
    <div className={Style.usersNav}>
      {pages}
    </div>
  );

};

export default Paginator;
