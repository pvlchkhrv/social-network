export interface CommonResponse<T> {
    resultCode: 0 | 1;
    messages: string[];
    data: T;
}
