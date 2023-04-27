import {FC, Fragment, useCallback, useEffect, useMemo, useState} from "react";
import {useSetRecoilState} from "recoil";
import {useNavigate} from "react-router-dom";
import styles from './Game.module.css'
import './style.css'
import {cn} from "../../utils/cn.ts";
import {List, ListItems} from "../../components/list";
import {Options} from "../../components/options";
import {Burger} from "../../components/burger";
import {useMachine} from "@xstate/react";
import nextStepMachine from "../../machine/nextStepMachene.ts";
import {transitionType} from "../../machine/types.ts";
import {status} from "../../components/options/types.ts";
import {totalState} from "../../store/total-state.ts";

type Timer = ReturnType<typeof setTimeout>;

export const Game : FC = () => {
    const navigate = useNavigate();
    const setTotalStateState = useSetRecoilState(totalState)
    const [state, send] = useMachine(nextStepMachine);
    const { question } = state.context;

    const questionData = useMemo(() =>
            question ? state.context.questions[question] : undefined,
        [question, state]
    );

    const awards = useMemo(() => {
        const result = Object.values(state.context.questions).map((item, index) => {
            return {
                id: index,
                award: item.award
            }
        })

        result.reverse()

        return result
    }, [state])

    const [total, setTotal] = useState<number>(0)
    const [isOpen, setOpen] = useState<boolean>(false)
    const [selected, setSelected] = useState<string>('')
    const [step, setStep] = useState<string>('')
    const [isStop, setStop] = useState<boolean>(false)
    const [status, setStatus] = useState<status>('inactive')
    const [count, setCount] = useState<number>(0)

    const onOption = useCallback((next: string, title: string) => {
        if (questionData) {
            const {award} = questionData;
            setTotal((result) => result + award)
            setStep(next)
            setSelected(title)
            setStop(true);
            setStatus('selected')
        }
    }, [questionData])

    useEffect(() => {

        let timer: Timer;
        let timer1: Timer;

        if (isStop) {
            timer = setTimeout(() => {
                if (!step) {
                    setStatus('wrong')
                } else {
                    setStatus('correct')
                }

                timer1 = setTimeout(() => {
                    setSelected('')
                    setStop(false);
                    setCount((count) => count + 1)
                    send({ type: "NEXT", question: step })

                    if (!step) {
                        navigate('/game-over')
                    } else {
                        setTotalStateState(total)
                    }
                }, 2000)
            }, 2000);
        }

        return() => {
            clearTimeout(timer)
            clearTimeout(timer1)
        }
    }, [isStop, navigate, send, setTotalStateState, step, total]);
    return (
        <div className={cn(styles.container)}>
            <div className={cn(styles.content, isStop ? 'is-stop-game' : null)}>
                <div className={cn(styles.burger, "w-full text-right")}>
                    <Burger onClock={setOpen} />
                </div>
                {questionData && (
                    <>
                        <h1 className={styles.title}>
                            {questionData.message}
                        </h1>
                        <div className={styles.options}>
                            {questionData.transition.map(({option, title, next}: transitionType) => (
                                <Options
                                    key={option}
                                    option={option}
                                    title={title}
                                    onClick={onOption}
                                    next={next}
                                    status={selected === title ? status : 'inactive'}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className={cn(styles.sidebar, !isOpen ? styles.sidebarIsOpen : null)}>
                <div className="w-full">
                    <List>
                        {awards.map(({id, award}) => (
                            <Fragment key={id}>
                                <ListItems value={award} isNext={id !== count} disabled={id < count} />
                            </Fragment>
                        ))}
                    </List>
                </div>
            </div>
        </div>
    )
}
