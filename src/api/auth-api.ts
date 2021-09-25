import {AuthUserData, LoginRequest} from '../types/auth';
import {BaseResponse, instance} from './instance';

export const authApi = {
    async authMe() {
        return await instance.get<BaseResponse<AuthUserData>>('/auth/me');
    },
    async login(payload: LoginRequest) {
        return await instance.post<BaseResponse<{userId: string}>>('/auth/login', payload);
    },
    async logout() {
        return await instance.delete<BaseResponse<{}>>('/auth/login');
    },
}
