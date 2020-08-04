import React from 'react';
import {connect} from 'react-redux';
import NavMenu from './NavMenu';

let mapStateToProps = (state) => ({
  navMenuItemDate: state.navMenuItemDate
});

const NavMenuContainer = connect(mapStateToProps)(NavMenu);

export default NavMenuContainer;