import {instance} from './instance';
import {BaseResponse} from '../types/base-response';
import {ProfilePhoto, PutProfileStatusRequest} from '../types/profile';
import {IProfile} from '../models/IProfile';

export const profileApi = {
    async getProfile(id: string) {
        return await instance.get<BaseResponse<{}>>(`profile/${id}`);
    },
    async putProfile(payload: IProfile) {
        return await instance.put<BaseResponse<{}>>(`profile/`);
    },
    async getProfileStatus(id: string) {
        return await instance.get<BaseResponse<{userId: string}>>(`profile/status/${id}`);
    },
    async putProfileStatus(payload: PutProfileStatusRequest) {
        return await instance.put<BaseResponse<{}>>(`profile/status}`, payload);
    },
    async putProfilePhoto() {
        return await instance.put<BaseResponse<ProfilePhoto>>('/profile/photo');
    },
}
