import { ButtonHTMLAttributes, FC, forwardRef } from 'react'
import styles from './styles.module.scss'
import cn from 'clsx'

export interface RadioProps extends ButtonHTMLAttributes<HTMLInputElement> {
    labelPlaceholder: string
}

export interface Option {
    label: string;
    name?: string;
    disabled?: boolean;
}

export interface OptionRadioGroup {
    options: Option[];
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Radio: FC<RadioProps> = forwardRef<HTMLInputElement, RadioProps>(({ className, labelPlaceholder, ...props }, ref) => {
    return (
        <div className={cn(className, styles.inputWrapper)}>
            <input type="radio" ref={ref} id={labelPlaceholder} {...props} className={cn(styles.input)} />
            <label htmlFor={labelPlaceholder}>{labelPlaceholder}</label>
        </div>
    );
});

const RadioButtonGroup: FC<OptionRadioGroup> = ({ options, onChange }) => {

    function renderOptions() {
        return options.map(({ label, name, disabled }: Option, index) => {
            const shortenedOptionLabel = label.replace(/\s+/g, "");
            const optionId = `radio-option-${shortenedOptionLabel}`;

            return (
                <Radio
                    value={label}
                    labelPlaceholder={label}
                    key={optionId}
                    name={name}
                    disabled={disabled}
                    defaultChecked={index === 0}
                    onChange={onChange}
                />
            );
        });
    }

    return (
        <div>
            {renderOptions()}
        </div>
    );
};

export default RadioButtonGroup