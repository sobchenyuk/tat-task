import {FC} from "react";
import styles from './ListItems.module.css'
import {formatter} from "../../../utils/formatter.ts";
import {cn} from "../../../utils/cn.ts";
import {Diamond} from "../../diamond";

type Props = {
    value: number
    disabled?: boolean
    isNext?: boolean
}

export const ListItems: FC<Props> = ({value, disabled = false, isNext = false}: Props) => {
    const borderColor = (disabled || isNext) ? null : '--color-light-blue'
    return (
        <li
            className={cn(
                styles.root,
                'text-center',
                'relative',
                disabled ? styles.disabled : null,
                isNext ? styles.next : null
            )}
        >
            <Diamond borderColor={borderColor} borderTop={21.5} borderBottom={21.5}>
                <span className={cn(styles.text, 'text')}>{formatter(value)}</span>
            </Diamond>
        </li>
    )
}
