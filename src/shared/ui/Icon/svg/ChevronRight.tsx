import { FC } from 'react'
import { AbstractPropsIcon } from '../types'

const ChevronRight: FC<AbstractPropsIcon> = ({
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
            <path d="M9.00002 19L16 12L9.00002 5" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export default ChevronRight