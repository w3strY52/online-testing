import * as React from 'react';
import styles from "./Navbar.module.scss"
import {Link} from "react-router-dom";
import {AuthService} from "../../APIService/AuthService";


function NavbarLegacy() {
    const doLogout = () => {
        AuthService.logout();
    }
    return (
        <div className={styles.NavBar}>
            <div className={styles.ImageLink}>
                <Link className={styles.Link} to="/">
                    <img src={'/images/headlogo.svg'} alt=""/>
                </Link>
            </div>
            <div className={styles.MainLink}>
                <Link className={styles.Link} to="/"> Главная</Link>
                <Link className={styles.Link} to="/exam"> Тестирование</Link>

                <Link className={styles.Link} to="/exam"> Результаты</Link>
            </div>
            <div className={styles.AuthLink}>
                <Link className={styles.Link} to={"/"} onClick={doLogout}> Выйти</Link>
            </div>
        </div>);
}

export default NavbarLegacy;