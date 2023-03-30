import { FC } from 'react'
import { AbstractPropsIcon } from '../types'

const CheckBoxNo: FC<AbstractPropsIcon> = ({
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
            <rect x="4" y="4" width="16" height="16" rx="1" stroke="white" strokeWidth="2" />
        </svg>
    )
}

export default CheckBoxNo