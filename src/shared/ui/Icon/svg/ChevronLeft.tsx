import { FC } from 'react'
import { AbstractPropsIcon } from '../types'

const ChevronLeft: FC<AbstractPropsIcon> = ({
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
            <path d="M15 19L8 12L15 5" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default ChevronLeft