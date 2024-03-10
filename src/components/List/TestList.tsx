import { Container } from "react-bootstrap";
import styles from "./List.module.scss"
import {TTest} from "../../types/CourseType";

interface IListProps {
    data: TTest[]
}


function List(props: IListProps) {
    const { data } = props;

    return (
        <Container>
            <ol className={styles.List}>
                {
                    data.map(line =>
                        <li>
                            <span className={styles.ListText}>
                                {line.title}
                            </span>
                        </li>)
                }
            </ol>
        </Container>
    );
}

export default List;