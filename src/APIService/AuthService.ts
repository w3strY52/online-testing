import {TAuth} from "../types/UserAuthType";


export class AuthService {
    static loginUser = async (input: TAuth) => {
        localStorage.setItem('auth', JSON.stringify('login'))
    };

    static logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('auth');
    };
}