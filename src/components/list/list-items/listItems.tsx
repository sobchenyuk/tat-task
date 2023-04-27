import {FC} from "react";
import styles from './ListItems.module.css'
import './style.css'
import {formatter} from "../../../utils/formatter.ts";
import {cn} from "../../../utils/cn.ts";
import {Diamond} from "../../diamond";
import useMediaQuery from "../../../hooks/useMediaQuery.ts";

type Props = {
    value: number
    disabled?: boolean
    isNext?: boolean
}

export const ListItems: FC<Props> = ({value, disabled = false, isNext = false}: Props) => {
    const matches = useMediaQuery('(min-width: 769px)')
    const borderColor = (disabled || isNext) ? '--color-Black-40' : '--color-light-blue'
    const isDesktop = !isNext && matches && !disabled ? 'isDesktop' : null
    return (
        <li
            className={cn(
                styles.root,
                'text-center',
                'relative',
                'list-items',
                disabled ? styles.disabled : null,
                isNext ? styles.next : null,
                isDesktop
            )}
        >
            <Diamond borderColor={borderColor} borderTop={matches ? 21.5 : 17.5} borderBottom={matches ? 21.5 : 17.5}>
                <span className={cn(styles.text, 'text')}>{formatter(value)}</span>
            </Diamond>
        </li>
    )
}
