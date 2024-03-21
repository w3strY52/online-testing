import {Task} from "../types/TaskType";

export const testTaskMock: Task[] = [
    {
        testId: 5,
        id: 1,
        question: 'Решить уравнение 2x + 5 = 11?',
    },
    {
        testId: 5,
        id: 2,
        question: 'Найти корни квадратного уравнения x^2 - 4x + 4 = 0?'
    },
    {
        testId: 5,
        id: 3,
        question: 'Решить систему уравнений:\n' +
            '   2x + y = 5,\n' +
            '   x - y = 1?\n' +
            'Ответ запишите через ; в формате х;y'
    },
    {
        testId: 6,
        id: 4,
        question: 'Какое из предложений является правильным с точки зрения правописания?\n' +
            '   - А) Я поехало в магазин.\n' +
            '   - Б) Я поехал в магазин.\n' +
            '   - В) Я поехалась в магазин.\n'
    },
    {
        testId: 6,
        id: 5,
        question: 'Выберите форму глагола, соответствующую единственному числу и мужскому роду:\n' +
            '   - А) идём\n' +
            '   - Б) пишем\n' +
            '   - В) спел\n'
    },
    {
        testId: 6,
        id: 6,
        question: 'Какое слово является наречием в предложении: "Он тихо шептал своему другу"?\n' +
            '   - А) он\n' +
            '   - Б) тихо\n' +
            '   - В) другу\n'
    },

    {
        testId: 6,
        id: 7,
        question: 'Найдите ошибку в предложении: "Он увидел хороший кино вчера".\n' +
            '   - А) увидел\n' +
            '   - Б) хороший\n' +
            '   - В) кино\n' +
            '\n'
    },

    {
        testId: 6,
        id: 8,
        question: 'Как называется часть речи, которая определяет существительное?\n' +
            '   - А) глагол\n' +
            '   - Б) прилагательное\n' +
            '   - В) наречие\n'
    },
    {
        testId: 6,
        id: 9,
        question: 'Согласуется ли слово "красивый" с существительным "цветы" в предложении: "Эти красивые цветы"?\n' +
            '   - А) Да\n' +
            '   - Б) Нет\n'
    }

];


export const answers: {
    taskId: number,
    correctAnswer: number | string;
}[] = [
    {
        taskId: 1,
        correctAnswer: 3
    },
    {
        taskId: 2,
        correctAnswer: 2
    },
    {
        taskId: 3,
        correctAnswer: '2;1'
    },
    {
        taskId: 4,
        correctAnswer: 'Б'
    },
    {
        taskId: 5,
        correctAnswer: "В"
    },
    {
        taskId: 6,
        correctAnswer: "Б"
    },
    {
        taskId: 7,
        correctAnswer: "Б"
    },
    {
        taskId: 8,
        correctAnswer: "Б"
    },
    {
        taskId: 9,
        correctAnswer: "А"
    }
]