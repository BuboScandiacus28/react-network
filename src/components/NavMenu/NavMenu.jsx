import React from 'react';
import Style from './NavMenu.module.css';
import NavMenuItem from './NavMenuItem/NavMenuItem';

const NavMenu = ({navMenuItemDate}) => {
  let navMenuItemElements = navMenuItemDate.map(el => <NavMenuItem href={el.href} iconId={el.iconId} title={el.title} />);
  
  return (
    <aside>
      <nav className={Style.menu}>
        <ul>
          {navMenuItemElements}
        </ul>
      </nav>
    </aside>
  );
};

export default NavMenu;

