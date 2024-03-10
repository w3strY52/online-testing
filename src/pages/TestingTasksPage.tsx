import {testTaskMock} from "../mocks/TestTaskMock";

import TestingTaskItem from "../components/Testing/TestingTaskItem";
import {Col, Row} from "react-bootstrap";
import MyButton from "../components/Button/Button";
import {Link, Navigate} from "react-router-dom";

function TestingTasksPage() {

    const goToResults = () => {

    }
    return (
        <div>
            <Row>
                <Col sm={{span: 8, offset: 2}}>
                    {
                        testTaskMock.map(x => {
                            return (
                                <TestingTaskItem task={x}/>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col sm={{span: 2, offset: 8}}>
                    <MyButton href={'/results'} onClick={goToResults}>Закончить тестирование</MyButton>
                </Col>
            </Row>
        </div>
    );
}

export default TestingTasksPage