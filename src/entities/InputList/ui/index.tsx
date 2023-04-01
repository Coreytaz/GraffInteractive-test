import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import cn from 'clsx'
import styles from './styles.module.scss'
import { Icon } from '../../../shared/ui/Icon'

const InputList: FC<{ action: ReactNode, value: String[], labelPlaceholder: string }> = ({ action, value, labelPlaceholder }) => {
    const [popup, setPopup] = useState(false)
    const sortRef = useRef<HTMLDivElement>(null)

    return (
        <div className={styles.wrapperList}>
            <label>
                {labelPlaceholder}
            </label>
            <div className={cn(styles.inputList_dropdown, { [styles.active]: popup })} ref={sortRef}>
                <div className={cn(styles.inputList_dropdown_header, { [styles.gradient]: popup })} onClick={() => setPopup(!popup)}>
                    {value?.length > 0 ? <span>Выбрано {value?.length}</span> : <span>Любой</span>}{!popup ? <Icon.ChevronDown /> : <Icon.ChevronUp />}
                </div>
                {popup && <div className={styles.inputList_dropdown_content}>
                    {action}
                </div>}
            </div>
        </div>
    )
}

export default InputList