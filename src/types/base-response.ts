export interface BaseResponse<T> {
    resultCode: 0 | 1;
    messages: string[];
    fieldsErrors: fieldError[];
    data: T;
}
interface fieldError {
    field: string;
    error: string;
}


