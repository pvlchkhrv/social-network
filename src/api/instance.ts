import axios from 'axios';
import {IUser} from '../models/IUser';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '44d5e153-6a8e-4009-97fa-dc87b2117b60'
    },
    withCredentials: true
});

enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

enum ResultCodeForCapcthaEnum {
    CaptchaIsRequired = 10
}

interface GetItems {
    items: IUser[];
    totalCount: number;
    error: string | null;
}

interface BaseResponse<D = {}, RC = ResultCodesEnum> {
    data: D;
    messages: string[];
    resultCode: RC;
}

export {
    instance,
    ResultCodeForCapcthaEnum,
    ResultCodesEnum
}

export type {
    BaseResponse,
    GetItems,

}
