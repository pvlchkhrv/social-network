interface LoginRequest {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: boolean;
}

interface AuthUserData {
    userId: string | null;
    email: string | null;
    login: string | null;
}

interface AuthInitialState {
    isAuth: boolean;
    userData: AuthUserData,
    status: 'loading' | 'succeed' | 'failed' | 'idle'
    error: string | null
}

export type {
    AuthUserData,
    LoginRequest,
    AuthInitialState
}


