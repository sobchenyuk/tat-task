import {FC} from "react";
import styles from './GameOver.module.css'
import {cn} from "../../utils/cn.ts";
import {Button} from "../../components/button";
import hand from "../../assets/hand.png";

export const GameOver :FC = () => {
    return (
        <div className={styles.root}>
            <div className={cn("container", styles.container)}>
                <div className={styles.hand}>
                    <img src={hand} alt="hend"/>
                </div>
                <div>
                    <h1 className={styles.title}>
                        <span className={cn(styles.text, "text")}>Total score:</span>
                        $8,000 earned
                    </h1>
                    <Button title="Try again" to="/" />
                </div>
            </div>
        </div>
    )
}
