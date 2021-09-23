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

interface AuthInitialState {
    isAuth: boolean;
    userId: string | null;
    email: string | null;
    login: string | null;

}

export type {
    Auth,
    LoginRequest,
    AuthInitialState
}


