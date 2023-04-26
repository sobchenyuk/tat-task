import {FC, useState} from "react";
import styles from './Burger.module.css'
import menuIcon from '../../assets/icons/menu.svg'
import closeIcon from '../../assets/icons/close.svg'

type Props = {
    onClock: (value: boolean) => void
}

export const Burger: FC<Props> = ({onClock}: Props) => {
    const [isOpen, setOpen] = useState<boolean>(false)
    const onBurger = () => {
        onClock(!isOpen)
        setOpen((isOpen) => {
            return !isOpen
        });
    }
    const icon = !isOpen ? menuIcon : closeIcon;
    return (
        <button onClick={onBurger} type="button" className={styles.btn}>
            <img src={icon} alt="burger" className={styles.icon}/>
        </button>
    )
}
