interface GetProfileAndStatusRequest {
    userId: number;
}

interface PutProfileStatusRequest {
    status: string;
}

interface ProfilePhoto {
    small: string;
    large: string;
}

interface PutProfilePhotoRequest {
    image: string
}

export type{
    GetProfileAndStatusRequest,
    PutProfileStatusRequest,
    ProfilePhoto,
    PutProfilePhotoRequest
}
