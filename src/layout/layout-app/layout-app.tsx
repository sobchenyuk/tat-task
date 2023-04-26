import {FC, useMemo} from "react";
import styles from './LayoutApp.module.css'
import {cn} from "../../utils/cn";
import {Outlet, useLocation} from "react-router-dom";

export const LayoutApp :FC = () => {
    const {pathname} = useLocation();

    const isGameStartPage = useMemo(() => pathname === '/', [pathname] )
    const isGamePage = useMemo(() => pathname === '/game', [pathname] )

    return (
        <div className={cn(styles.root, isGameStartPage ? 'isGameStartPage' : isGamePage ? 'isGamePage' : null)}>
            <Outlet />
        </div>
    )
}
