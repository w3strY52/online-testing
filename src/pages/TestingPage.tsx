import {useParams} from "react-router-dom";
import {testMock} from "../mocks/TestMock";
import {useState} from "react";
import {Card, CardHeader} from "@mui/material";
import {CardBody, Col, Container, Row} from "react-bootstrap";
import MyButton from "../components/Button/Button";
import TestingTasksPage from "./TestingTasksPage";

function TestingPage() {

    const id = useParams().id;
    const [agreed, setAgreed] = useState<boolean>(false)
    if (!id) {
        return (<p>Ne ukazan id</p>)
    }
    const test = testMock.find(x => x.id.toString() === id)!

    return (
        <div>
            {agreed ?
                <div>
                    <TestingTasksPage testId={id}/>
                </div> :
                <Container style={{marginTop: 50}}>
                    <Card>
                        <CardHeader title={test.title}/>
                        <CardBody>
                            <Row>
                                <Col sm={{span: 10, offset: 1}}>
                                    <p>{test.description}</p>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={{span: 2, offset: 1}}>
                                    <p>Количество вопросов: {test.taskCount}</p>
                                </Col>
                                <Col sm={{offset: 6, span: 2}}>
                                    <p>Длительность: {test.timer} минут</p>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={{span: 2, offset: 8}}>
                                    <MyButton onClick={() => {
                                        setAgreed(true)
                                    }}>Приступить!</MyButton>
                                </Col>
                            </Row>
                            <p/>
                        </CardBody>
                    </Card>

                </Container>
            }


        </div>)
}


export default TestingPage;