export type transitionType = {
    option: string
    title: string
    next: string
}

export interface IQuestion {
    [key: string]: string | number | transitionType[];
    message: string
    award: number
    transition: transitionType[]
}

export type Context = {
    question: string
    questions: { [key: string]: IQuestion }
}
