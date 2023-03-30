import { ButtonHTMLAttributes, FC, forwardRef } from "react";
import cn from 'clsx'
import styles from './styles.module.scss'

export interface CheckboxProps extends ButtonHTMLAttributes<HTMLInputElement> {
    labelPlaceholder: string
}

const Checkbox: FC<CheckboxProps> = forwardRef<HTMLInputElement, CheckboxProps>(({ className, labelPlaceholder, ...props }, ref) => {
    return (
        <div className={cn(className, styles.inputWrapper)}>
            <input type="checkbox" ref={ref} id={labelPlaceholder} {...props} className={cn(styles.input)} />
            <label htmlFor={labelPlaceholder}>{labelPlaceholder}</label>
        </div>
    );
});

export default Checkbox