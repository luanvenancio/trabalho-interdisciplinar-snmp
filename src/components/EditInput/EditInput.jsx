import React, { useState } from 'react';
import { SInput, SEditInputContainer } from './styles';
import { FiEdit } from "react-icons/fi";
import { IconContext } from "react-icons";

const EditInput = ({ value, setValue }) => {
  const [editingValue, setEditingValue] = React.useState(value);

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
  };

  return (
    <SEditInputContainer>
      <IconContext.Provider value={{ color:"grey"}}>
        <div>
      <FiEdit />
      </div>
      </IconContext.Provider>
      <SInput
        type="text"
        aria-label="Field name"
        value={editingValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
      />
    </SEditInputContainer>
  );
};

export default EditInput;