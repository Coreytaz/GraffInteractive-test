import { ButtonHTMLAttributes, FC, forwardRef } from 'react'
import styles from './styles.module.scss'
import cn from 'clsx'

export interface InputProps extends ButtonHTMLAttributes<HTMLInputElement> {
    labelPlaceholder: string
    appearance?: 'primary' | 'gradient'
    color?: 'white' | 'gray'
}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(({ className, labelPlaceholder, appearance = 'primary', color = 'gray', ...props }, ref) => {
    return (
        <div className={cn(className, styles.inputWrapper)}>
            <label htmlFor={labelPlaceholder}>{labelPlaceholder}</label>
            <input ref={ref} id={labelPlaceholder} {...props} className={cn(styles.input, {
                [styles.primary]: appearance == 'primary',
                [styles.gradient]: appearance == 'gradient',
                [styles.white]: color == 'white',
                [styles.gray]: color == 'gray',
            })} />
        </div>
    );
});

export default Input