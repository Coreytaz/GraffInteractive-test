import { FC } from "react"
import styles from './styles.module.scss'
import { Button } from "../../shared/ui/Button"
import { Icon } from "../../shared/ui/Icon"
import { useNavigate, useParams } from "react-router-dom"
import { shipsApi } from "../../shared/api/product/shipsApi"
import useTitle from "../../shared/lib/useTitle"

const ProductPage: FC = () => {
    const navigate = useNavigate();
    let { id } = useParams()
    const { data: ships, isLoading, isError } = shipsApi.useGetShipsQuery(id)
    useTitle(`${ships ? ships.name : "Книга не найдена"} | SpaceX Ships`);

    const onPushBack = () => {
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
        } else {
            navigate('/', { replace: true });
        }
    }

    if (isLoading) {
        return (
            <div className="container">
                <section className={styles.layout}>
                    <h2>Загрузка...</h2>
                </section>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="container">
                <section className={styles.layout}>
                    <h2>Произошла ошибка</h2>
                </section>
            </div>
        )
    }

    return (
        <div className="container">
            <section className={styles.layout}>
                <div className={styles.back}>
                    <Button onClick={onPushBack} icon={<Icon.ArrowLeft />}>Вернуться</Button>
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h2>{ships?.name}</h2>
                    </div>
                    <div className={styles.characteristics}>
                        <div className={styles.type}>
                            <span>Тип</span><span>{ships?.type}</span>
                        </div>
                        <div className={styles.port}>
                            <span>Порт</span><span>{ships?.home_port}</span>
                        </div>
                        <div className={styles.weight}>
                            <span>Вес</span><span>{ships?.mass_kg} кг</span>
                        </div>
                        <div className={styles.years}>
                            <span>Год</span><span>{ships?.year_built}</span>
                        </div>
                    </div>
                    <div className={styles.mission}>
                        <span>
                            Миссии
                        </span>
                        <p>
                            SES-9, CRS-8, Thaicom 8, ABS-2A / Eutelsat 117W B, JCSAT-16, SES-10, BulgariaSat-1, SES-11 / Echostar 105, KoreaSat 5A, Falcon Heavy Test Flight, TESS, Bangabandhu-1, Telstar 19V, Merah Putih, Telstar 18V, Es’hail 2, Nusantara Satu (PSN-6) / S5 / Beresheet, CCtCap Demo Mission 1, ArabSat 6A, CRS-17, Starlink v0.9, STP-2, Starlink 1, JCSat 18 / Kacific 1, Starlink 2, Starlink 3, Starlink 4, Starlink 5
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductPage