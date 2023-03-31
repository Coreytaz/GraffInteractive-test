import { FC, useState } from "react"
import styles from './styles.module.scss'
import { Icon } from "../../../shared/ui/Icon";

const ProductRowCard: FC = () => {
    const [hover, setHover] = useState(false);
    return (
        <div className={styles.rootCard} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className={styles.productTitle}>
                <h2>Of Course I Still Love You</h2>
            </div>
            <div className={styles.characteristics}>
                <div className={styles.type}>
                    <span>Тип</span><span>Barge</span>
                </div>
                <div className={styles.port}>
                    <span>Порт</span><span>Port Canaveral</span>
                </div>
            </div>
            {hover ? <div className={styles.arrowRight}><Icon.ArrowRight /></div> : null}
        </div>
    )
}

export default ProductRowCard