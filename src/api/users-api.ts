import {instance} from './instance';
import {GetUsersResponse} from '../types/users';

export const authApi = {
    async getUsers() {
        return await instance.get<GetUsersResponse>('auth/me');
    },
};
