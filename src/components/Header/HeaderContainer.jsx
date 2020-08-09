import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import * as axios from 'axios';
import {setAuthUserData, toggleIsAuth} from './../../redux/auth-reducer.js';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setAuthUserData(id, email, login);
                this.props.toggleIsAuth(true);
            } else {
                this.props.toggleIsAuth(false);
            }
        });
    }

    render() {
        this.componentDidMount();
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
    setAuthUserData, toggleIsAuth
})(HeaderContainer);