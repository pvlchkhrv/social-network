export interface BaseResponse<T> {
    resultCode: 0 | 1;
    messages: string[];
    fieldsErrors?: FieldError[];
    data: T;
}

export interface FieldError {
    field: string;
    error: string;
}


