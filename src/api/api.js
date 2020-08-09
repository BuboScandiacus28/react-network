import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "c9ae8fe3-1df5-4182-85a6-347d10a3f515"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    }
};

export const followAPI = {
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data);
    }
};

export const authMeAPI = {
    authorization() {
        return instance.get(`auth/me`).then(response => response.data);
    }
};