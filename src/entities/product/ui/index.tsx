import { FC, useState } from "react"
import styles from './styles.module.scss'
import { Icon } from "../../../shared/ui/Icon";
import { DocShip } from "../../../shared/types/types";
import { Link } from "react-router-dom";

const ProductRowCard: FC<DocShip> = ({ name, home_port, type, id }) => {
    const [hover, setHover] = useState(false);
    return (
        <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
            <div className={styles.rootCard} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <div className={styles.productTitle}>
                    <h2>{name}</h2>
                </div>
                <div className={styles.characteristics}>
                    <div className={styles.type}>
                        <span>Тип</span><span>{type}</span>
                    </div>
                    <div className={styles.port}>
                        <span>Порт</span><span>{home_port}</span>
                    </div>
                </div>
                {hover ? <div className={styles.arrowRight}><Icon.ArrowRight /></div> : null}
            </div>
        </Link>
    )
}

export default ProductRowCard