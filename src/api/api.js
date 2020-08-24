import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "c9ae8fe3-1df5-4182-85a6-347d10a3f515",
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                //response.cookie('token', '', {sameSite: 'Lux', secure: 'Lux'});
                return (response.data);
            });
    }
};

export const followAPI = {
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                //response.cookie('token', '', {sameSite: 'Lux', secure: 'Lux'});
                return (response.data);
            });
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                //response.cookie('token', '', {sameSite: 'Lux', secure: 'Lux'});
                return (response.data);
            });
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                //response.cookie('token', '', {sameSite: 'Lux', secure: 'Lux'});
                return (response.data);
            });
    },
    login(email, password, rememberMe = false, captcha) {
        return instance.post(`auth/login`, {
                email,
                password,
                rememberMe,
                captcha
            })
            .then(response => {
                //response.cookie('token', '', {sameSite: 'Lux', secure: 'Lux'});
                return (response.data);
            });
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => {
                //response.cookie('token', '', {sameSite: 'Lux', secure: 'Lux'});
                return (response.data);
            });
    }
};

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                //response.cookie('token', '', {sameSite: 'Lux', secure: 'Lux'});
                return (response.data);
            });
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                //response.cookie('token', '', {sameSite: 'Lux', secure: 'Lux'});
                return (response.data);
            });
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {
                status: status
            })
            .then(response => {
                //response.cookie('token', '', {sameSite: 'Lux', secure: 'Lux'});
                return (response.data);
            });
    },
    savePhoto(photo) {
        let formData = new FormData();
        formData.append('image', photo);

        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            //response.cookie('token', '', {sameSite: 'Lux', secure: 'Lux'});
            return (response.data);
        });
    },
    saveProfile(profileData) {
        return instance.put(`profile`, profileData)
            .then(response => {
                //response.cookie('token', '', {sameSite: 'Lux', secure: 'Lux'});
                return (response.data);
            });
    }
};

export const securityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
            .then(response => {
                //response.cookie('token', '', {sameSite: 'Lux', secure: 'Lux'});
                return (response.data);
            });
    }
};