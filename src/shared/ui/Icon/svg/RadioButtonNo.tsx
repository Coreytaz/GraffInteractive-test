import { FC } from 'react'
import { AbstractPropsIcon } from '../types'

const RadioButtonNo: FC<AbstractPropsIcon> = ({
    fill = 'currentColor',
    filled,
    size,
    height,
    width,
    label,
    ...props
}) => {
    return (
        <svg width={size || width || 24}
            height={size || height || 24}
            viewBox="0 0 24 24"
            fill={filled ? fill : 'none'}
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <circle cx="12" cy="12" r="8" stroke="white" stroke-width="2" />
        </svg>

    )
}

export default RadioButtonNo