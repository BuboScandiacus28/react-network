import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {getAuthUserTh, logoutTh} from './../../redux/auth-reducer.js';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserTh();
    }

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
    getAuthUserTh, logoutTh
})(HeaderContainer);