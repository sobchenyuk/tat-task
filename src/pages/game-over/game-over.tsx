import {FC, useMemo} from "react";
import styles from './GameOver.module.css'
import {cn} from "../../utils/cn.ts";
import {Button} from "../../components/button";
import hand from "../../assets/hand.png";
import {useTotalState} from "../../store/total-state.ts";
import {formatter} from "../../utils/formatter.ts";

export const GameOver :FC = () => {
    const total = useTotalState();
    const result = useMemo(() => formatter(total), [total])
    return (
        <div className={styles.root}>
            <div className={cn("container", styles.container)}>
                <div className={styles.hand}>
                    <img src={hand} alt="hend"/>
                </div>
                <div>
                    <h1 className={styles.title}>
                        <span className={cn(styles.text, "text")}>Total score:</span>
                        {result} earned
                    </h1>
                    <Button title="Try again" to="/" />
                </div>
            </div>
        </div>
    )
}
