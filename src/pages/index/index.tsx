import { useState } from "react";
import { Checkbox } from "../../shared/ui/checkbox";
import { Icon } from "../../shared/ui/Icon";
import { RadioButtonGroup } from "../../shared/ui/radio";

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

    function drinkSelectionHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedValue(event.target.value);
    }
    return (
        <>
            <div style={{ margin: '20px' }}>
                <Icon.ArrowLeft />
            </div>
            <div style={{ margin: '20px' }}>
                <RadioButtonGroup options={drinks} onChange={drinkSelectionHandler} />
            </div>
            <div style={{ margin: '20px' }}>
                <Checkbox labelPlaceholder={"check"} />
            </div>
        </>
    )
}

export default IndexPage