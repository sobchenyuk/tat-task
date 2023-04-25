import {FC} from "react";
import styles from './Button.module.css'
import {cn} from "../../utils/cn.ts";

type Props = {
    onClick?: () => void
    title: string
    color?: 'pressed' | 'inactive' | 'default'
}

export const Button :FC<Props> = ({onClick, title, color}: Props) => {
    const className = color === 'pressed' ? styles.pressed : color === 'inactive' ? styles.inactive : null
    return <button
        type="button"
        className={cn(styles.btn, className)}
    >{title}</button>
}
