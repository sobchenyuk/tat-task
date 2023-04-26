import React, {FC} from "react";
import styles from './Diamond.module.css'
import {cn} from "../../utils/cn.ts";

type Props = {
    children: React.ReactNode
    borderColor?: string | null
    borderTop?: number
    borderBottom?: number
    classNameDiamond?: string
}

export const Diamond: FC<Props> = ({
    children,
    borderColor = "--color-White-100",
    borderBottom = 21.5,
    borderTop = 21.5,
    classNameDiamond = ""
}: Props) => {
    const styleBorderColor = {
        borderColor: `var(${borderColor})`
    }
    const styleBorder = {
        borderTop: `${borderTop}px solid transparent`,
        borderBottom: `${borderBottom}px solid transparent`
    }
    const styleBorderTopLeftColor = {
        borderLeftColor: `var(${borderColor})`
    }
    const styleBorderTopRightColor = {
        borderRightColor: `var(${borderColor})`
    }

    return (
        <div>
            <div className={cn(styles.line, 'diamond__line')} style={styleBorderColor} />
            <div className={cn(styles.diamond, classNameDiamond, 'diamond__wrap')} style={styleBorderColor}>
                <div className={cn(styles.top, 'diamond__top')}>
                    <div className={cn(styles.topBefore, 'diamond__top-before')} style={{...styleBorder, ...styleBorderTopRightColor}} />
                    <div className={cn(styles.topAfter, 'diamond__top-after')} style={{...styleBorder, ...styleBorderTopLeftColor}} />
                    <div className={cn(styles.bottomBefore, 'diamond__bottom-before')} style={styleBorder} />
                    <div className={cn(styles.bottomAfter, 'diamond__bottom-after')} style={styleBorder} />
                </div>
                <div className={cn(styles.content, 'diamond__content')}>{children}</div>
            </div>
        </div>
    )
}
