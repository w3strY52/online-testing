export enum CheckedCorrect{
    CORRECT = 'CORRECT',
    WRONG = 'WRONG'
}
export type TChecked = {
    hint?: string;
    isCorrect?: CheckedCorrect
    answerImage?: string;
}