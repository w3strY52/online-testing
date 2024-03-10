import {Col, Container, Row} from "react-bootstrap";
import {me} from "../mocks/UserMock";
import {TreeItem, TreeView} from "@mui/x-tree-view";
import MainTableMaterial from "../components/MainTable/MainTableMaterial";
import {Card, CardContent, CardHeader, Divider, TextField} from "@mui/material";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


function MainPage() {
    document.title = 'Главная';
    return (
        <Container>
            <div style={{marginTop: 50, marginBottom: 50}}>
                <Row>
                    <Col sm={{offset: 2, span: 4}}>
                        <img style={{maxHeight: '70%', maxWidth: '70%'}} src={'Yaroslav.jpeg'}/>
                    </Col>

                    <Col sm={{span: 4}}>

                        <Card>
                            <CardHeader title={'Личная информация'}/>
                            <CardContent style={{margin: 5}}>
                                <Row>
                                    <TextField
                                        color='success'
                                        label={'Фамилия'}
                                        variant={"outlined"}
                                        disabled={true}
                                        sx={{
                                            "& .MuiInputBase-input.Mui-disabled": {
                                                WebkitTextFillColor: "#000000",
                                            },
                                        }}
                                        defaultValue={me.secondName}/>
                                </Row>
                                <p/>
                                <Row>
                                    <TextField
                                        label={'Имя'}
                                        variant={"outlined"}
                                        disabled={true}
                                        sx={{
                                            "& .MuiInputBase-input.Mui-disabled": {
                                                WebkitTextFillColor: "#000000",
                                            },
                                        }}
                                        defaultValue={me.firstName}/>
                                </Row>
                                <p/>

                                <Row>
                                    <TextField
                                        label={'Отчество'}
                                        variant={"outlined"}
                                        disabled={true}
                                        sx={{
                                            "& .MuiInputBase-input.Mui-disabled": {
                                                WebkitTextFillColor: "#000000",
                                            },
                                        }}
                                        defaultValue={me.lastName}/>
                                </Row>
                                <p/>

                                <Row>
                                    <TextField
                                        label={'Класс'}
                                        variant={"outlined"}
                                        disabled={true}
                                        sx={{
                                            "& .MuiInputBase-input.Mui-disabled": {
                                                WebkitTextFillColor: "#000000",
                                            },
                                        }}
                                        defaultValue={me.form}/>
                                </Row>
                            </CardContent>
                        </Card>
                    </Col>
                </Row>

                <p/>
                <Divider>Тестирования</Divider>
                <p/>
                <Row>
                    <Col sm={{offset: 1, span: 10}}>
                        <h4>Активные тестирования</h4>
                        <TreeView
                            aria-label="file system navigator"
                            defaultCollapseIcon={<ExpandMoreIcon />}
                            defaultExpandIcon={<ChevronRightIcon />}
                        >
                            <TreeItem nodeId="1" label="Математика">
                                <MainTableMaterial id={1} isChecked={false}/>
                            </TreeItem>
                            <TreeItem nodeId="2" label="Русский язык">
                                <MainTableMaterial id={2} isChecked={false}/>
                            </TreeItem>

                            <TreeItem nodeId="3" label="Биология">
                                <MainTableMaterial id={3} isChecked={false}/>
                            </TreeItem>
                        </TreeView>

                    </Col>
                </Row>
                <p/><p/>
                <Row>
                    <Col sm={{offset: 1, span: 10}}>
                        <h4>История тестирований</h4>
                        <TreeView
                            aria-label="file system navigator"
                            defaultCollapseIcon={<ExpandMoreIcon />}
                            defaultExpandIcon={<ChevronRightIcon />}
                        >
                            <TreeItem nodeId="1" label="Математика">
                                <MainTableMaterial id={1} isChecked={true}/>
                            </TreeItem>
                            <TreeItem nodeId="2" label="Русский язык">
                                <MainTableMaterial id={2} isChecked={true}/>
                            </TreeItem>

                            <TreeItem nodeId="3" label="Биология">
                                <MainTableMaterial id={3} isChecked={true}/>
                            </TreeItem>
                        </TreeView>
                    </Col>
                </Row>
            </div>
        </Container>
    )

}

export default MainPage;