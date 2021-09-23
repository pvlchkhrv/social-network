import {instance} from './instance';
import {GetUsersResponse} from '../types/users';

export const usersApi = {
    async getUsers() {
        return await instance.get<GetUsersResponse>('/users');
    },
};
