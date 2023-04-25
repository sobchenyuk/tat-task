import React, {FC} from "react";
import styles from './List.module.css'

type Props = {
    children: React.ReactNode
}

export const List: FC<Props> = ({children}: Props) => {
    return <ul className={styles.list}>{children}</ul>
}
