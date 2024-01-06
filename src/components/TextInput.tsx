import React from "react";

interface TextInputProps {
    id: string
    label: string
    placeholder: string
    value: string
    disabled: boolean
    setValue: (value: string) => void
}

export const TextInput = ({id, label, placeholder, value, disabled, setValue}: TextInputProps) => (
    <div className={"mb-4"}>
        <label htmlFor={id} className={"block text-gray-700 text-sm font-bold mb-2"}>{label}</label>
        <input id={id}
               value={value}
               placeholder={placeholder}
               disabled={disabled}
               onChange={(event) => setValue(event.target.value)}
               className={"border rounded w-full py-2 px-3 text-gray-700 leading-tight"}/>
    </div>
)