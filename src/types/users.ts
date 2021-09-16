import {IUser} from '../models/IUser';

interface GetUsersResponseData {
    items: IUser[];
    totalCount: number;
    error: 'null';
}

export type {
    GetUsersResponseData
}
