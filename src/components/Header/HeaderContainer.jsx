import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {authorizationTh} from './../../redux/auth-reducer.js';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authorizationTh();
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
    authorizationTh
})(HeaderContainer);