import {AlertContent, AlertProps} from "./Alert";

export const EmailAlert = ({text}: AlertProps) => (
    <div className={"p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50"} role={"alert"}>
        <AlertContent title={"Email found"} body={text}/>
    </div>
)