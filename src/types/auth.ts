interface Auth {
    id: number;
    email: string | null;
    login: string | null;
}

interface LoginRequest {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: boolean;
}



export type {
    Auth,
    LoginRequest
}
