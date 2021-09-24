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

interface UserData {
    userId: string | null;
    email: string | null;
    login: string | null;
}

interface AuthInitialState {
    isAuth: boolean;
    userData: UserData,
    isLoading: boolean;
    error: string | null
}

export type {
    Auth,
    LoginRequest,
    AuthInitialState
}


