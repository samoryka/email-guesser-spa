import React from "react";

interface SubmitButtonProps {
    disabled: boolean
}

export const SubmitButton = ({disabled}: SubmitButtonProps) => (
    <input type="submit"
           disabled={disabled}
           className={"bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded"}/>
)
