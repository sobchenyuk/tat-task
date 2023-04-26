import {FC} from "react";
import styles from './Options.module.css'
import './style.css'
import {Diamond} from "../diamond";
import {cn} from "../../utils/cn.ts";
import useMediaQuery from "../../hooks/useMediaQuery.ts";
import {status} from "./types.ts";

type Props = {
    status?: status
    option: string
    title: string
    next: string
    onClick: (next: string, title: string) => void
}

export const Options:FC<Props> = ({status = 'inactive', option, title, onClick, next}: Props) => {
    const matches = useMediaQuery('(min-width: 769px)')
    const borderColor =
        status === 'selected' ? '--color-Orange-100' :
        status === 'correct' ? '--color-Green-100' :
        status === 'wrong' ? '--color-Red-100' : '--color-Black-40'

    const onNext = () => onClick(next, title)
    return (
        <button onClick={onNext} className={cn(styles.root, 'options')}>
            <Diamond
                classNameDiamond={cn(styles.diamond, status)}
                borderColor={borderColor}
                borderTop={matches ? 37.5 : 29}
                borderBottom={matches ? 37.5 : 29}
            >
                <div className={styles.content}>
                    <span className={styles.title}>
                        {option}
                    </span>
                    <span className={cn(styles.text, 'text')}>
                        {title}
                    </span>
                </div>
            </Diamond>
        </button>
    )
}
