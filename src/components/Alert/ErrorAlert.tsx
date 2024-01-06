import {AlertContent, AlertProps} from "./Alert";

export const ErrorAlert = ({text}: AlertProps) => (
    <div className={"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"} role={"alert"}>
        <AlertContent title={"Email couldn't be found"} body={text}/>
    </div>
)