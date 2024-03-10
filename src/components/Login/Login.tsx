import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {AuthService} from "../../APIService/AuthService";

import {useAuthContext} from "../../context/authContext";
import {TAuth} from "../../types/UserAuthType";

import styles from './Login.module.scss';
import {Col, Container, Row} from "react-bootstrap";
import classNames from "classnames";
import MyButton from "../Button/Button";
import AuthInput from "../LoginInput/AuthInput";

function Login() {
    const navigate = useNavigate();
    const {setIsAuth} = useAuthContext();
    const [state, setState] = useState<TAuth>({
        login: "",
        password: ""
    });

    const handleChange = (event: any) => {
        const {name, value} = event.target;
        setState({...state, [name]: value})
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await AuthService.loginUser(state)
            setIsAuth(!!localStorage.getItem('auth'));
            navigate(`/`)
        } catch (e: any) {
            console.log(e.response.data.message || e.response.data.error)
        }
    };

    useEffect(() => {
        setState({login: '', password: ''})
    }, [])
    const {login, password} = state;

    return (
        <Container fluid className={styles.LoginContainer}>
            <Row className='pt-4'>

                <form onSubmit={handleSubmit}>
                    <Row className={classNames('justify-content-center')}>
                        <Col xs={11} sm={3}>
                            <h3>Войти в личный кабинет</h3>
                        </Col>
                    </Row>
                    <Row className={classNames('justify-content-center')}>
                        <Col xs={11} sm={5}>
                            <Row className={classNames('justify-content-center')}>
                                <AuthInput
                                    placeholder="Логин"
                                    name="login"
                                    type='login'
                                    value={login}
                                    onChange={handleChange}
                                    margin='dense'
                                />
                            </Row>
                            <Row>
                                <div className={styles.Title}/>
                            </Row>
                        </Col>
                    </Row>
                    <Row className={classNames('justify-content-center')}>
                        <Col xs={11} sm={5}>
                            <Row>
                                <AuthInput
                                    type="password"
                                    placeholder="Пароль"
                                    name="password"
                                    value={password}
                                    onChange={handleChange}
                                />
                            </Row>
                            <p/>
                            <Row>
                                <div className={styles.Title}/>
                            </Row>
                        </Col>
                    </Row>

                    <p/>

                    <Row className={classNames('justify-content-center')}>
                        <Col xs={12} sm={5}>
                            <MyButton onClick={handleSubmit} type={"submit"}>
                                "Войти"
                            </MyButton>
                        </Col>
                    </Row>
                </form>
            </Row>
        </Container>

    );
}

export default Login;