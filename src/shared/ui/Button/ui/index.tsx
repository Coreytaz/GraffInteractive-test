import { ButtonHTMLAttributes, Children, FC, forwardRef, ReactNode } from "react";
import cn from 'clsx'
import styles from './styles.module.scss'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: ReactNode
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, icon, ...props }, ref) => {
    return (
        <button ref={ref} {...props} className={cn(styles.button, className)}>
            {icon && <span className={cn(styles.icon)}>{icon}</span>}
            <div className={cn(styles.buttonText)}>{children}</div>
        </button >
    );
});

export default Button