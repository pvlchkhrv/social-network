export interface BaseResponse<T> {
    resultCode: 0 | 1;
    messages: string[];
    data: T;
}
