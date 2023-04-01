import { ButtonHTMLAttributes, Dispatch, FC, forwardRef, useId } from "react";
import cn from 'clsx'
import styles from './styles.module.scss'
import { UrlUpdateType } from "use-query-params";

type NewValueType<D> = D | ((latestValue: D) => D)

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
    setPort: (value: string[]) => void
    value: string[]
}

export const Checkbox: FC<CheckboxProps> = forwardRef<HTMLInputElement, CheckboxProps>(({ className, labelPlaceholder, ...props }, ref) => {
    return (
        <div className={cn(className, styles.inputWrapper)}>
            <input type="checkbox" ref={ref} id={props.id} {...props} className={cn(styles.input)} />
            <label htmlFor={props.id}>{labelPlaceholder}</label>
        </div>
    );
});


const CheckboxGroup: FC<OptionCheckboxGroup> = ({ options, setPort, value }) => {
    const passwordHintId = useId();

    function drinkSelectionCheckboxHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const { id } = event.target;
        console.log(id)
        const currentId = id.replace('checkbox-option-', "")
        if (value.includes(currentId)) {
            const newValue = value.filter((item) => item !== currentId)
            setPort(newValue)
        } else {
            const newValue = [...value, currentId]
            setPort(newValue);
        }
    }

    function renderOptions() {
        return options.map(({ label, name, disabled }: Option) => {
            const defaultChecked = value.includes(label)
            const optionId = `checkbox-option-${label}`;
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