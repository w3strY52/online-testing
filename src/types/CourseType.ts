export type TTest = {
    id: number;
    title: string;
    timer: number;
    description: string;
    taskCount: number;
    checked: boolean;
    correctAnswers?: number;
    mark?: number;
    disciplineId: number;
}