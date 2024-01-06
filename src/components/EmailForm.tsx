import {TextInput} from "./TextInput";
import {SubmitButton} from "./SubmitButton";
import React, {FormEvent, useState} from "react";
import {deriveEmail, EmailResponse} from "../queries/deriveEmail";

interface EmailFormProps {
    setEmailResponse: (emailResponse: EmailResponse) => void
}

export const EmailForm = ({setEmailResponse}: EmailFormProps) => {
    const [fullName, setFullName] = useState("")
    const [companyDomain, setCompanyDomain] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()

        setIsLoading(true)

        const emailResponse = await deriveEmail(fullName, companyDomain)
        setEmailResponse(emailResponse)

        setIsLoading(false)
    }

    return (
        <form onSubmit={handleSubmit} className={"flex-col mb-4"}>
            <TextInput id={"full_name"}
                       label={"Full Name"}
                       value={fullName}
                       placeholder={"Samory Ka"}
                       disabled={isLoading}
                       setValue={setFullName}/>
            <TextInput id={"company_domain"}
                       label={"Company Domain"}
                       value={companyDomain}
                       placeholder={"babbel.com"}
                       disabled={isLoading}
                       setValue={setCompanyDomain}/>
            <div className={"flex justify-end"}><SubmitButton disabled={isLoading}/></div>
        </form>
    )
}