import { FC, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { ProductRowCard } from '../../../entities/product'
import { Icon } from '../../../shared/ui/Icon'
import { Button } from '../../../shared/ui/Button'
import { ModalSidebar } from '../Sidebar'
import { Pagination } from '../../../entities/pagination'
import * as catalogParams from "../params";
import { useSelector } from 'react-redux'
import { TypeRootState } from '../../../app/store'
import { useActionShips } from '../../../shared/api/product/hooks'

const useFilters = () => {
    const { page } = catalogParams.useFilterByPage();
    const { port } = catalogParams.useFilterByPort();
    const { type } = catalogParams.useFilterByType();
    const { search } = catalogParams.useSearchParam();

    const bodySearch =
        search.length > 0
            ? { $text: { $search: search } }
            : undefined;
    const bodyType =
        type.length > 0
            ? { type: { $in: [type] } }
            : undefined;
    const bodyHome_port =
        port.length > 0
            ? { home_port: { $in: port } }
            : undefined;

    console.log(bodyHome_port)
    return {
        query: {
            ...bodySearch,
            ...bodyType,
            ...bodyHome_port,
        },
        options: {
            limit: 5,
            page
        }
    };
};

const Content: FC = () => {
    const { getShipsProduct } = useActionShips()
    const filter = useFilters()
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        }
    }, [open]);

    useEffect(() => {
        getShipsProduct(filter)
    }, [filter])

    return (
        <>
            <main className={styles.layout}>
                <div className={styles.title}>
                    <h1>SpaceX Ships</h1>
                    <Button onClick={() => setOpen(!open)} icon={<Icon.Filters />} className={styles.openFilter}>Фильтры</Button>
                </div>
                <ProudctSection />
                <PageSection />
            </main>
            <ModalSidebar open={open} onClose={() => setOpen(!open)} />
        </>
    )
}

const ProudctSection = () => {
    const { ships, status } = useSelector((state: TypeRootState) => state.ShipsSlice)
    console.log(ships)

    if (status === 'loading') {
        return (
            <main className={styles.layout}>
                <h2>Загрузка...</h2>
            </main>
        )
    }

    if (status === 'error') {
        return (
            <main className={styles.layout}>
                <h2>Произошла ошибка</h2>
            </main>
        )
    }

    return (
        <section className={styles.content}>
            {
                ships?.docs.length! > 0 ? ships?.docs.map((ship) => (
                    <ProductRowCard key={ship.id} {...ship} />
                ))
                    : <h2>Ничего не найдено</h2>
            }
        </section>
    )
}

const PageSection = () => {
    const params = catalogParams.useFilterByPage()

    return (
        <Pagination value={params.page} setPage={params._setPage} />
    );
};

export default Content