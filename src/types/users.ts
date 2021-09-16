import {IUser} from '../models/IUser';

interface GetUsersResponse {
    items: IUser[];
    totalCount: number;
    error: 'null';
}

interface GetUsersRequest {
    pageCount?: number;
    page: number;
    term: string;
}

export type {
    GetUsersResponse,
    GetUsersRequest
}
