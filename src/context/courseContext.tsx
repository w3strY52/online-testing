import {createContext, Dispatch, SetStateAction, useContext, useState} from "react";
import TaskService from "../APIService/TaskService";
import {emptyFunction, emptyPromise} from "../constants/emptyFunction";
import {TTest} from "../types/CourseType";
import {Task} from "../types/TaskType";
import {TChecked} from "../types/CheckedAnswerType";
import {getCookie} from "react-use-cookie";


/**
 * Контекст курсов/экзаменов
 */


export type TCourseContext = {
    taskList: any[],
    setTasksContext: Dispatch<SetStateAction<Task[]>>,
    setCourse: Dispatch<SetStateAction<TTest>>,
    course: any,
    isClickedCheck: boolean,
    setIsClickedCheck: Dispatch<SetStateAction<boolean>>,
    checkedTasks: any,
    setCheckedTasks: Dispatch<SetStateAction<TChecked[]>>,
    handleSubmit: (e: any) => Promise<void>,
    handleChange: (e: any) => void,
    isCheckButtonDisabled: boolean,
    setCheckButtonDisabled: (e: any) => void,
    answersList: any,
 }


const CourseContext = createContext<TCourseContext>(
    {
        taskList: [],
        setTasksContext: emptyFunction,
        setCourse: emptyFunction,
        isClickedCheck: false,
        setIsClickedCheck: emptyFunction,
        course: {},
        checkedTasks: [],
        setCheckedTasks: emptyFunction,
        handleSubmit: emptyPromise,
        handleChange: emptyFunction,
        isCheckButtonDisabled: false,
        setCheckButtonDisabled: emptyFunction,
        answersList: {},
    }
);

function CourseProvider(props: { children: any }) {
    const userInfo: any = getCookie('auth');

    const [taskList, setTasksContext] = useState<Task[]>([]);
    const [answersList, setAnswersContext] = useState<any>({});
    const [course, setCourse] = useState<TTest>({
        checked: false, correctAnswers: 0, disciplineId: 0, mark: 0, taskCount: 0,
        id: 0,
        timer: 0,
        description: '',
        title: ''
    });
    const [checkedTasks, setCheckedTasks] = useState<TChecked[]>([]);
    const [isCheckButtonDisabled, setCheckButtonDisabled] = useState<boolean>(true);
    const [isClickedCheck, setIsClickedCheck] = useState<boolean>(false);


    const setAnswersAfterCheck = (tmpName: string[], value: any) => {
        if (!value.length) {
            setAnswersContext(delete {...answersList}[Number(tmpName[1])])
        } else {
            if (tmpName.length === 2) {
                setAnswersContext({...answersList, [tmpName[1]]: value});
            }
        }
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setCheckedTasks([]);
        setIsClickedCheck(true);
       await TaskService.postAnswersToCourse(
            {
                courseId: course.id,
                answers: answersList,
                user: userInfo ? userInfo : ''
            });
       // setCheckedTasks(a.data);
    };

    const handleChange = (e: any) => {
        const tmpName = e.target.id.length === 0 ?
            e.target.parentElement.parentElement.parentElement.id.split('_') :
            e.target.id.split('_');
        const {value} = e.target;

        setAnswersAfterCheck(tmpName, value);

    };
    const resetAll = () => {
        setIsClickedCheck(false);
        setAnswersContext({})
        // setCheckedTasks([]);
        // setAnswersContext([]);
    };

    return (
        <CourseContext.Provider
            value={{
                taskList,
                answersList,
                setTasksContext,
                setCourse,
                course,
                isClickedCheck,
                setIsClickedCheck,
                checkedTasks,
                setCheckedTasks,
                handleSubmit,
                handleChange,
                isCheckButtonDisabled,
                setCheckButtonDisabled,
                }}
        >
            {props.children}
        </CourseContext.Provider>
    );
}

export default CourseProvider;

export const useCourseContext = () => {
    return useContext(CourseContext);
};