export default class TaskService {
    /**
     * Метод для получения заданий по курсу
     * @param id - айди курса
     * @param courseType - тип курса
     * @return {Promise<any>}
     */
    static async getTasksByCourseId(id: number | string, courseType: string) {
        return
    }

    /**
     * Метод для сохранения ответов на курс
     * @param courseType тип курса - экзамен или тема
     * @param data - данные для отправки
     * @return {Promise<any>}
     */
    static async postAnswersToCourse(data: any) {
        //console.log('posted:', data);
        return
    }


}