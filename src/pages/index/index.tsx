import { useState } from "react";
import { Button } from "../../shared/ui/Button";
import { CheckboxGroup } from "../../shared/ui/checkbox";
import { Icon } from "../../shared/ui/Icon";
import { RadioButtonGroup } from "../../shared/ui/radio";
import { InputList } from "../../entities/InputList";
import { ProductRowCard } from "../../entities/product";

const IndexPage = () => {
    const drinks = [
        {
            label: "Coffee",
            name: "drink-types",
        },
        {
            label: "Tea",
            name: "drink-types",
        },
    ];
    const [selectedValue, setSelectedValue] = useState<String>(drinks[0].label);
    const [selectedCheckbox, setSelectedCheckbox] = useState<String[]>(['Tea']);
    return (
        <>
            <div style={{ margin: '20px' }}>
                <Icon.ArrowLeft />
            </div>
            <div style={{ margin: '20px' }}>
                <RadioButtonGroup options={drinks} onChange={setSelectedValue} />
            </div>
            <div style={{ margin: '20px' }}>

            </div>
            <div style={{ margin: '20px' }}>
                <Button icon={<Icon.ChevronDown />}>qweqweqwe</Button>
            </div>
            <div style={{ margin: '20px' }}>
                <InputList value={selectedCheckbox} action={<CheckboxGroup options={drinks} value={selectedCheckbox} onChange={setSelectedCheckbox} />} />
            </div>
            <div style={{ margin: '20px' }}>
                <ProductRowCard />
            </div>
        </>
    )
}

export default IndexPage