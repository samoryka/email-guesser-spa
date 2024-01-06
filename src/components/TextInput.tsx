import React from "react";

interface TextInputProps {
    id: string
    label: string
    value: string
    disabled: boolean
    setValue: (value: string) => void
}

export const TextInput = ({id, label, value, disabled, setValue}: TextInputProps) => (
    <>
        <label htmlFor={id}>{label}</label>
        <input id={id} value={value} disabled={disabled} onChange={(event) => setValue(event.target.value)}/>
    </>
)