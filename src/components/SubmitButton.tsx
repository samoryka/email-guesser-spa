import React from "react";

interface SubmitButtonProps {
    disabled: boolean
}

export const SubmitButton = ({disabled}: SubmitButtonProps) => <input type="submit" disabled={disabled}/>