import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {setAuthUserData, toggleIsAuth} from './../../redux/auth-reducer.js';
import {authMeAPI} from './../../api/api.js';

class HeaderContainer extends React.Component {
    componentDidMount() {
        authMeAPI.authorization().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                this.props.setAuthUserData(id, email, login);
                this.props.toggleIsAuth(true);
            } else {
                this.props.toggleIsAuth(false);
            }
        });
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
    setAuthUserData, toggleIsAuth
})(HeaderContainer);