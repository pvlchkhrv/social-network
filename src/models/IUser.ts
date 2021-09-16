export interface IUser {
    id: number;
    name: string;
    photos: {
        small: null | string;
        large: null | string;
    },
    status: null | string;
    followed: boolean;
}
