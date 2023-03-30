import { ChangeEvent, useState } from "react";
import { Button } from "../../shared/ui/Button";
import { CheckboxGroup } from "../../shared/ui/checkbox";
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
    const [selectedCheckbox, setSelectedCheckbox] = useState<String[]>(['Tea']);

    function drinkSelectionHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedValue(event.target.value);
    }
    function drinkSelectionCheckboxHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const { id } = event.target;
        if (selectedCheckbox.includes(id)) {
            setSelectedCheckbox((prev) => prev.filter((item) => item !== id))
            return
        }
        setSelectedCheckbox((prev) => [...prev, id]);
        return
    }
    console.log(selectedCheckbox)
    return (
        <>
            <div style={{ margin: '20px' }}>
                <Icon.ArrowLeft />
            </div>
            <div style={{ margin: '20px' }}>
                <RadioButtonGroup options={drinks} onChange={drinkSelectionHandler} />
            </div>
            <div style={{ margin: '20px' }}>
                <CheckboxGroup options={drinks} value={selectedCheckbox} onChange={drinkSelectionCheckboxHandler}/>
            </div>
            <div style={{ margin: '20px' }}>
                <Button icon={<Icon.ChevronDown />}>qweqweqwe</Button>
            </div>
        </>
    )
}

export default IndexPage