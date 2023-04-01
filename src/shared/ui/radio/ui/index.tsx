import { ButtonHTMLAttributes, Dispatch, FC, forwardRef, useId } from 'react'
import styles from './styles.module.scss'
import cn from 'clsx'
import { UrlUpdateType } from 'use-query-params';

type NewValueType<D> = D | ((latestValue: D) => D)
export interface RadioProps extends ButtonHTMLAttributes<HTMLInputElement> {
    labelPlaceholder: string
}

export interface Option {
    label: string;
    name?: string;
    disabled?: boolean;
}

export interface OptionRadioGroup {
    value: string;
    options: Option[];
    onChange: (nextValue: string) => void;
    labelPlaceholder: String
}

export const Radio: FC<RadioProps> = forwardRef<HTMLInputElement, RadioProps>(({ className, labelPlaceholder, ...props }, ref) => {
    return (
        <div className={cn(className, styles.inputWrapper)}>
            <input type="radio" ref={ref} id={props.id} {...props} className={cn(styles.input)} />
            <label htmlFor={props.id}>{labelPlaceholder}</label>
        </div>
    );
});

const RadioButtonGroup: FC<OptionRadioGroup> = ({ value, options, onChange, labelPlaceholder }) => {
    const passwordHintId = useId();
    function drinkSelectionHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const currentId = event.target.value.replace('radio-option-', "")
        onChange(currentId);
    }
    function renderOptions() {
        return options.map(({ label, name, disabled }: Option, index) => {
            const shortenedOptionLabel = label.replace(/\s+/g, "");
            const optionId = `radio-option-${shortenedOptionLabel}`;

            return (
                <Radio
                    value={label}
                    labelPlaceholder={label}
                    key={optionId}
                    id={optionId}
                    name={passwordHintId}
                    disabled={disabled}
                    defaultChecked={value === label}
                    onChange={drinkSelectionHandler}
                />
            );
        });
    }

    return (
        <div className={styles.wrapperGroupRadio}>
            <label>
                {labelPlaceholder}
            </label>
            {renderOptions()}
        </div>
    );
};

export default RadioButtonGroup