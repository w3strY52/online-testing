import {answers, testTaskMock} from "../mocks/TestTaskMock";

import TestingTaskItem from "../components/Testing/TestingTaskItem";
import {Col, Row} from "react-bootstrap";
import MyButton from "../components/Button/Button";
import {useNavigate} from "react-router-dom";

function TestingTasksPage(props: { testId: string }) {
    let navigate = useNavigate();
    const tasksToShow = testTaskMock.filter(x => x.testId.toString() === props.testId);

    const goToResults = () => {
        const asd = tasksToShow.map(x => {
            const val = localStorage.getItem(`taskId${x.id}`);
            console.log(x.id,val)
            return val?.toString() === answers.find(y => y.taskId === x.id)?.correctAnswer.toString() || '';
        })
        localStorage.setItem(`testId${props.testId}`, asd.filter(x => x === true).length.toString());
        console.log(localStorage.getItem(`testId${props.testId}`));
        navigate(`/results/${props.testId}`)
    };

    return (
        <div>
            <Row>
                <Col sm={{span: 6, offset: 3}}>
                    {
                        tasksToShow.map(x => {
                            return (
                                <TestingTaskItem task={x}/>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col sm={{span: 2, offset: 8}}>
                    <MyButton  onClick={goToResults}>Закончить тестирование</MyButton>
                    <p/>
                </Col>
            </Row>
        </div>
    );
}

export default TestingTasksPage