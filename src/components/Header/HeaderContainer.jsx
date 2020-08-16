import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {logoutTh} from './../../redux/auth-reducer.js';

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props} />
        );
    }
}

let mapToStateProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    };
};

export default connect(mapToStateProps, {
    logoutTh
})(HeaderContainer);