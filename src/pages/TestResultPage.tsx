import {Col, Container, Row} from "react-bootstrap";
import {me} from "../mocks/UserMock";
import MyButton from "../components/Button/Button";

function TestResultPage() {

    return (
        <Container>
            <Row>
                <Col sm={{span: 8, offset: 2}}>
                    <h2>Результаты</h2>
                    <p>{me.secondName} {me.firstName}, Ваш результат составил 1 из 2.</p>

                    <p>Итоговая оценка: 3</p>
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