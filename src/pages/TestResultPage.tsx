import {Col, Container, Row} from "react-bootstrap";
import {me} from "../mocks/UserMock";
import MyButton from "../components/Button/Button";
import {useParams} from "react-router-dom";
import {testListMock} from "../mocks/TestMock";

function TestResultPage() {
    const id = useParams().id;

    const result = testListMock.find(x => x.id.toString() === id);

    const correctAnswerCount = localStorage.getItem(`testId${id}`);


    const percent = (Number(correctAnswerCount) / Number(result?.taskCount)*100) || 0

    const mark = percent === 0 ? 2 : (percent> 80 ? 5 : (percent > 60 ? 4 : 3));

    localStorage.setItem(`testId${id}mark`, mark.toString())
    return (
        <Container>
            <Row>
                <Col sm={{span: 8, offset: 2}}>
                    <h2>Результаты</h2>
                    <p>{me.secondName} {me.firstName}, Ваш результат
                        составил {correctAnswerCount || 0} из {result?.taskCount || 0}.</p>

                    <p>Итоговая
                        оценка: {percent === 0 ? 2 : (percent> 80 ? 5 : (percent > 60 ? 4 : 3))}</p>
                </Col>
            </Row>


            <Row>
                <Col sm={{span: 8, offset: 2}}>
                    <MyButton href={'/'}>На главную</MyButton>
                </Col>
            </Row>
        </Container>)
}

export default TestResultPage