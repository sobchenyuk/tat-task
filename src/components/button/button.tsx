import {FC} from "react";
import { Link, LinkProps } from "react-router-dom";
import styles from './Button.module.css'
import {cn} from "../../utils/cn.ts";

type Props = LinkProps & {
    title: string
    color?: 'pressed' | 'inactive' | 'default'
}

export const Button :FC<Props> = ({title, color, ...other}: Props) => {
    const className = color === 'pressed' ? styles.pressed : color === 'inactive' ? styles.inactive : null
    return <Link className={cn(styles.btn, className, 'btn')} {...other}>{title}</Link>
}
