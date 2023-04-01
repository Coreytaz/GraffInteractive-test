import { FC, useCallback, useState } from "react"
import styles from './styles.module.scss'
import { Input } from "../../../shared/ui/Input"
import { InputList } from "../../../entities/InputList"
import { CheckboxGroup } from "../../../shared/ui/checkbox"
import { RadioButtonGroup } from "../../../shared/ui/radio"
import { Button } from "../../../shared/ui/Button"
import { Icon } from "../../../shared/ui/Icon"
import { createPortal } from "react-dom"
import debounce from "lodash/debounce";
import * as catalogParams from "../params";
import cn from 'clsx'

const Sidebar: FC<{ className?: String; onClose?: () => void }> = ({ className, onClose }) => {
    return (
        <aside className={cn(className, styles.layout)}>
            <div className={styles.title}>
                <h2>Фильтры</h2>
                <Button icon={<Icon.ArrowLeft />} onClick={onClose} className={styles.openFilter}>Фильтры</Button>
            </div>
            <div className={styles.filters}>
                <SearchSection />
                <PortSection />
                <TypeSection />
            </div>
        </aside>
    )
}

const SearchSection = () => {
    const [value, setValue] = useState("");
    const params = catalogParams.useSearchParam()

    const delayedSearch = useCallback(
        debounce((q) => params.setSearch(q)
            , 300),
        []
    );

    const handleChange = (string: string) => {
        setValue(string)
        delayedSearch(string);
    };

    return (
        <Input labelPlaceholder='Название' value={value} setSearch={handleChange} />
    );
};

const PortSection = () => {
    const drinks = [
        {
            label: "Port Canaveral",
            name: "port",
        },
        {
            label: "Port of Los Angeles",
            name: "port",
        },
        {
            label: "Fort Lauderdale",
            name: "port",
        },
    ];
    const params = catalogParams.useFilterByPort()

    return (
        <InputList labelPlaceholder='Порт' value={params.port} action={<CheckboxGroup options={drinks} value={params.port} setPort={params.setPort} />} />
    );
};

const TypeSection = () => {
    const drinks = [
        {
            label: "Barge",
            name: "type",
        },
        {
            label: "Cargo",
            name: "type",
        },
        {
            label: "High Speed Craft",
            name: "type",
        },
        {
            label: "Tug",
            name: "type",
        },
    ];
    const params = catalogParams.useFilterByType()

    return (
        <RadioButtonGroup value={params.type} options={drinks} onChange={params.setType} labelPlaceholder='Тип' />
    );
};

interface ModalProps {
    open: boolean
    onClose: () => void
}

export const ModalSidebar: FC<ModalProps> = ({ open, onClose }) => {
    if (!open) return null

    return createPortal(
        <>
            <div className={styles.modal_overlay} onClick={onClose} />
            <div className={styles.modal_window}>
                <Sidebar onClose={onClose} className={cn({ [styles.active]: open })} />
            </div>
        </>
        , document.getElementById('ModalSidebar') as Element)
}

export default Sidebar