import {Col, Container, Row} from "react-bootstrap";
import {Task} from "../../types/TaskType";
import {TextField} from "@mui/material";
import styles from './Testing.module.scss'

function TestingTaskItem(props: { task: Task }) {
    return (
        <Container fluid>
            <div className={styles.TestItemStyle}>
                <Row>
                    <Col xs={12}>
                        <Row>
                            <Col sm={12} md={12} lg={7} xs={12}>
                                <Row>
                                    <Col sm={7} md={7}>
                                        <p>{props.task.question}</p>
                                    </Col>
                                    <Col xs={4} sm={4} md={4} lg={5}>
                                        <TextField/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Container>)
}

export default TestingTaskItem