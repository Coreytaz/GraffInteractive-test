import { ButtonHTMLAttributes, Dispatch, FC, forwardRef, useId } from "react";
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
    onChange: Dispatch<React.SetStateAction<String[]>>
    value: String[]
}

export const Checkbox: FC<CheckboxProps> = forwardRef<HTMLInputElement, CheckboxProps>(({ className, labelPlaceholder, ...props }, ref) => {
    return (
        <div className={cn(className, styles.inputWrapper)}>
            <input type="checkbox" ref={ref} id={props.id} {...props} className={cn(styles.input)} />
            <label htmlFor={props.id}>{labelPlaceholder}</label>
        </div>
    );
});


const CheckboxGroup: FC<OptionCheckboxGroup> = ({ options, onChange, value }) => {
    const passwordHintId = useId();

    function drinkSelectionCheckboxHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const { id } = event.target;
        const currentId = id.replace('checkbox-option-', "")
        if (value.includes(currentId)) {
            onChange((prev) => prev.filter((item) => item !== currentId))
            return
        }
        onChange((prev) => [...prev, currentId]);
        return
    }

    function renderOptions() {
        return options.map(({ label, name, disabled }: Option) => {
            const defaultChecked = value.includes(label)
            const shortenedOptionLabel = label.replace(/\s+/g, "");
            const optionId = `checkbox-option-${shortenedOptionLabel}`;
            return (
                <Checkbox
                    value={label}
                    labelPlaceholder={label}
                    id={optionId}
                    key={optionId}
                    name={passwordHintId}
                    disabled={disabled}
                    defaultChecked={defaultChecked}
                    onChange={drinkSelectionCheckboxHandler}
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