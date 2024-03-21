import {TTest} from "../types/CourseType";
import {testTaskMock} from "./TestTaskMock";

export const testMock: TTest[] = [{
    checked: false,
    disciplineId: 1,
    taskCount: testTaskMock.filter(x => x.testId === 5).length,
    description: `Тест по алгебре от 17/01/2024. Перед Вами будет представлены задания по алгебре на тему "Решение уравнений".
     Для каждого задания выберите 1 правильный вариант ответа и запишите его букву в поле для ответов. Время выполнения теста ограничено! \n Желаем удачи!`,
    id: 5,
    timer: 30,
    title: "Тест по алгебре от 07/03/2024"
}, {
    checked: false,
    disciplineId: 2,
    taskCount: testTaskMock.filter(x => x.testId === 6).length,
    description: "Тест по русскому языку от 17/01/2024. Перед Вами будет представлены задания по русскому языку на различные темы." +
        "Для каждого задания выберите 1 правильный вариант ответа и запишите его букву в поле для ответов. Время выполнения теста ограничено! \n Желаем удачи!",
    id: 6,
    timer: 20,
    title: "Тест по русскому языку от 17/01/2024"
}]


export const testListMock: TTest[] = [
    {
        checked: true,
        disciplineId: 1,
        taskCount: 10,
        correctAnswers: 10,
        mark: 5,
        description: "",
        id: 1,
        timer: 0,
        title: "Test 1"
    },
    {
        checked: !!localStorage.getItem(`testId5`),
        mark: Number(localStorage.getItem(`testId5mark`)) || undefined,
        correctAnswers: Number(localStorage.getItem('testId5')) || undefined,
        disciplineId: 1,
        taskCount: 3,
        description: "",
        id: 5,
        timer: 30,
        title: "Тест по алгебре от 07/03/2024"
    },
    {
        checked: true,
        disciplineId: 3,
        taskCount: 10,
        correctAnswers: 1,
        mark: 2,
        description: "",
        id: 3,
        timer: 0,
        title: "Test 3"
    }, {
        checked: !!localStorage.getItem(`testId6`),
        disciplineId: 2,
        taskCount: 5,
        mark: Number(localStorage.getItem(`testId6mark`)) || undefined,
        correctAnswers: Number(localStorage.getItem('testId6')) || undefined,
        description: "Тест по русскому языку от 17/01/2024",
        id: 6,
        timer: 20,
        title: "Тест по русскому языку от 17/01/2024"
    }
]