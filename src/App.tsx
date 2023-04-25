import {useMemo} from "react";
import './App.css'
import {useMachine} from "@xstate/react";
import nextStepMachine from "./machine/nextStepMachene.ts";
import {transitionType} from "./machine/types.ts";

function App() {
    const [state, send] = useMachine(nextStepMachine);
    const { question } = state.context;

    const questionData = useMemo(() =>
        question ? state.context.questions[question] : undefined,
        [question, state]
    );

  return (
    <>
      <div className="card">
          {state.matches("welcome") ? (
              <>
                  <h2>Welcome!</h2>
                  {state.nextEvents.map((event) => (
                      <button type="button" onClick={(_) => send(event)} key={event}>
                          {event} Start
                      </button>
                  ))}
              </>
          ) : state.matches("question") ? (
              <>
                  {questionData && (
                      <>
                          <h2>{questionData.message}</h2>
                          <h3>${questionData.award}</h3>
                          {questionData.transition.map(({option, title, next}: transitionType) => (
                              <button
                                  onClick={(_) => send({ type: "NEXT", question: next })}
                                  key={title}
                              >
                                  ({option}) {title}
                              </button>
                          ))}
                      </>
                  )}
                  {!questionData && (
                      <>
                          <div>Game Over</div>
                          <button type="button" onClick={(_) => send({ type: "NEXT", question: 'one' })}>
                              Start Game
                          </button>
                      </>
                  )}
              </>
          ) : null}
      </div>
    </>
  )
}

export default App
