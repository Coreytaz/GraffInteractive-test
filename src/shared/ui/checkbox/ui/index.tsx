import { ButtonHTMLAttributes, FC, forwardRef } from "react";
import cn from 'clsx'
import styles from './styles.module.scss'

export interface CheckboxProps extends ButtonHTMLAttributes<HTMLInputElement> {
    labelPlaceholder: string
}

export interface Option {
    label: string;
    name?: string;
    disabled?: boolean;
}

export interface OptionCheckboxGroup {
    options: Option[];
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: String[]
}

export const Checkbox: FC<CheckboxProps> = forwardRef<HTMLInputElement, CheckboxProps>(({ className, labelPlaceholder, ...props }, ref) => {
    return (
        <div className={cn(className, styles.inputWrapper)}>
            <input type="checkbox" ref={ref} id={labelPlaceholder} {...props} className={cn(styles.input)} />
            <label htmlFor={labelPlaceholder}>{labelPlaceholder}</label>
        </div>
    );
});


const CheckboxGroup: FC<OptionCheckboxGroup> = ({ options, onChange, value }) => {
    function renderOptions() {
        return options.map(({ label, name, disabled }: Option) => {
            const defaultChecked = value.includes(label)
            const shortenedOptionLabel = label.replace(/\s+/g, "");
            const optionId = `checkbox-option-${shortenedOptionLabel}`;
            return (
                <Checkbox
                    value={label}
                    labelPlaceholder={label}
                    key={optionId}
                    name={name}
                    disabled={disabled}
                    defaultChecked={defaultChecked}
                    onChange={onChange}
                />
            )
        })
    }

    return (
        <div>
            {renderOptions()}
        </div>
    );

}

export default CheckboxGroup