import {FC} from "react";
import './triangle.css'
import styles from './GameStart.module.css'
import './game-start.css'
import {cn} from "../../utils/cn.ts";
import {Button} from "../../components/button";
import hand from '../../assets/hand.png'

export const GameStart: FC = () => {
    return (
        <div className={styles.root}>
            <div className="triangle" />
            <div className={cn("container", styles.container)}>
                <div className={styles.hand}>
                    <img src={hand} alt="hend"/>
                </div>
                <div>
                    <h1 className={styles.title}>
                        Who wants to be
                        a millionaire?
                    </h1>
                    <Button title="Start" to="/game" />
                </div>
            </div>
        </div>
    )
}
