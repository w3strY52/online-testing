import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {testListMock} from "../../mocks/TestMock";
import {Link} from "react-router-dom";

function MainTableMaterial(props: { id: number, isChecked: boolean }) {
    const res = testListMock.filter(x => x.id === props.id && x.checked === props.isChecked);
    return (
        <div>
            {!!res.length?
            <TableContainer sx={{maxHeight: 700}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Название</TableCell>
                            <TableCell>Выполнено заданий</TableCell>
                            <TableCell>Оценка</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{backgroundColor: 'rgba(190, 220, 227, 1)'}}>
                        {testListMock.filter(x => x.id === props.id && x.checked === props.isChecked).map(x =>
                            <TableRow>
                                <TableCell>{x.title}</TableCell>
                                <TableCell>{x.correctAnswers || 0}/{x.taskCount}</TableCell>
                                {props.isChecked ? <TableCell>{x.mark}</TableCell> :
                                    <TableCell><Link to={`/test/${props.id}`}>Выполнить</Link></TableCell>
                                }
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>:<h6 style={{color:'rgba(24, 51, 69, 0.3)'}}>Нет тестов</h6>}
        </div>
    )
}

export default MainTableMaterial