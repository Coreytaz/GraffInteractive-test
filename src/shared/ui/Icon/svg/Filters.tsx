import { FC } from 'react'
import { AbstractPropsIcon } from '../types'

const Filters: FC<AbstractPropsIcon> = ({
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
            <path d="M10 15L20 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M14 9L4 9" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 15L6 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M20 9L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <circle cx="8" cy="15" r="2" stroke="white" strokeWidth="2" strokeLinecap="square" />
            <circle cx="3" cy="3" r="2" transform="matrix(-1 0 0 1 19 6)" stroke="white" strokeWidth="2" strokeLinecap="square" />
        </svg>
    )
}

export default Filters