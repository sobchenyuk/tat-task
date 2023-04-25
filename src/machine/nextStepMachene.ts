import { createMachine, assign } from 'xstate';

import {Context} from "./types.ts";

import questions from '../config.json'

const nextStepMachine = createMachine<Context>({
    predictableActionArguments: true,
    id: 'nextStepMachine',
    initial: "welcome",
    context: {
        question: "one",
        questions: JSON.parse(JSON.stringify(questions))
    },
    states: {
        welcome: {
            on: {
                NEXT: "question"
            }
        },
        question: {
            on: {
                NEXT: {
                    actions: ['nextStep']
                }
            }
        },
        gameOver: {
            type: "final"
        }
    }
}, {
    actions: {
        nextStep: assign({
            question: (_, e) => e.question
        })
    },
});

export default nextStepMachine;
