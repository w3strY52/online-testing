import {TTest} from "../types/CourseType";

export const testMock: TTest = {
    checked: false,
    disciplineId: 1,
    taskCount: 0,
    description: "",
    id: 5,
    timer: 30,
    title: "Test 5"
}


export const testListMock: TTest[] = [
    {
        checked: true, disciplineId: 1,
        taskCount: 10,
        correctAnswers: 10,
        mark: 5,
        description: "",
        id: 1,
        timer: 0,
        title: "Test 1"
    },
    {
        checked: false, taskCount: 20, disciplineId: 2,
        description: "",
        id: 2,
        timer: 0,
        title: "Test 2"
    },
    {
        checked: true, disciplineId: 3,
        taskCount: 10,
        correctAnswers: 1,
        mark: 2,
        description: "",
        id: 3,
        timer: 0,
        title: "Test 3"
    },
    {
        checked: false, taskCount: 0, disciplineId: 1,
        description: "",
        id: 4,
        timer: 0,
        title: "Test 4"
    }
]