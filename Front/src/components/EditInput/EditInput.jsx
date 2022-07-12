import React, { useState } from "react";
import { SInput, SEditInputContainer, SIcon } from "./styles";
import { FiEdit } from "react-icons/fi";
import { IconContext } from "react-icons";

const EditInput = ({ value, setValue }) => {
    const [editingValue, setEditingValue] = useState(value);
    const [colorIcon, setColorIcon] = useState("grey");

    const onChange = (event) => setEditingValue(event.target.value);

    const onKeyDown = (event) => {
        if (event.key === "Enter" || event.key === "Escape") {
            event.target.blur();
        }
    };

    const onBlur = (event) => {
        if (event.target.value.trim() === "") {
            setEditingValue(value);
        } else {
            setValue(event.target.value);
        }
        setColorIcon("grey");
    };

    const onFocus = (event) => {
        setColorIcon("black");
    }

    return (
        <SEditInputContainer>
            <IconContext.Provider value={{ color: colorIcon }}>
                <SIcon>
                    <FiEdit />
                </SIcon>
            </IconContext.Provider>
            <SInput
                type="text"
                aria-label="Edit Ip Address"
                value={editingValue}
                onChange={onChange}
                onKeyDown={onKeyDown}
                onBlur={onBlur}
                onFocus={onFocus}
            />
        </SEditInputContainer>
    );
};

export default EditInput;
