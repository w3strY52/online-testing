import {TAuth} from "../types/UserAuthType";


export class AuthService {
    static loginUser = async (input: TAuth) => {
        localStorage.setItem('auth', JSON.stringify(input.login))
    };

    static logout = () => {
        localStorage.removeItem('token');

        localStorage.removeItem(`testId${6}mark`);
        localStorage.removeItem(`testId${5}mark`);

        localStorage.removeItem(`testId${5}`);
        localStorage.removeItem(`testId${6}`);

        console.log(localStorage.getItem(`testId5`))

        console.log(localStorage.getItem(`testId6`))
        localStorage.removeItem('auth');
    };
}