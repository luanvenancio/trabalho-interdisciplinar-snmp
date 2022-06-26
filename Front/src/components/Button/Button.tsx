import React from "react";
import { SButton } from "./styles";

const Button = ({ className, children, type, onClick }:any) => {
    return (
        <>
            <button className={className} onClick={onClick} type={type}>
                {children}
            </button>
        </>
    );
};

export default Button;
