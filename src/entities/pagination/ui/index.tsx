import { FC } from "react"
import styles from './styles.module.scss'
import { Button } from "../../../shared/ui/Button"
import { Icon } from "../../../shared/ui/Icon"
import { useSelector } from "react-redux"
import { TypeRootState } from "../../../app/store"

interface PaginationProps {
    value: number
    setPage: (page: number) => void
}

const Pagination: FC<PaginationProps> = ({ value, setPage }) => {
    const { ships } = useSelector((state: TypeRootState) => state.ShipsSlice)
    return (
        <div className={styles.paginationWrapper}>
            <Button onClick={() => setPage(ships?.prevPage!)} icon={<Icon.ChevronLeft />} disabled={value === 1} />
            <div>{value}</div>
            <Button onClick={() => setPage(ships?.nextPage!)} icon={<Icon.ChevronRight />} disabled={ships?.totalPages === value} />
        </div>
    )
}

export default Pagination