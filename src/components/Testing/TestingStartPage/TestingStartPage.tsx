import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";

import styles from "../Testing.module.scss"

function TestingStartPage() {
    const navigate = useNavigate();

    return (
        <Container fluid className={styles.LoginContainer}>
            <Row className='pt-4'>
            </Row>
        </Container>

    );
}

export default TestingStartPage;