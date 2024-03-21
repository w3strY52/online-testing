import * as React from 'react';
import styles from "./Navbar.module.scss"
import {Link, useNavigate} from "react-router-dom";
import {AuthService} from "../../APIService/AuthService";
import {useState} from "react";


function NavbarLegacy() {
    const navigate = useNavigate();

    const [lala, setLala] = useState<boolean>(false)

    const doLogout = () => {
        AuthService.logout();
        navigate(`/login`)
        // eslint-disable-next-line no-restricted-globals
        location.replace('/login');
        setLala(!lala)
    }
    return (
        <div className={styles.NavBar}>
            <div className={styles.MainLink}>
                <Link className={styles.Link} to="/"> Главная</Link>
                <Link className={styles.Link} to="/exam"> Результаты</Link>
            </div>
            <div className={styles.AuthLink}>
                <Link className={styles.Link} to={"/login"} onClick={doLogout}> Выйти</Link>
            </div>
        </div>);
}

export default NavbarLegacy;