interface IUser {
    id: number;
    name: string;
    photos: Photos;
    status: null | string;
    followed: boolean;
}

interface Photos {
    small: null | string;
    large: null | string;
}


export type{
    IUser,
    Photos
}
