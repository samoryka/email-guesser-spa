import React, {FormEvent, useState} from 'react';
import {deriveEmail} from "./queries/deriveEmail";
import {TextInput} from "./components/TextInput";
import {SubmitButton} from "./components/SubmitButton";
import {ResponseCard} from "./components/ResponseCard";
import {Header} from "./components/Header";

interface EmailResponse {
    email: string
    error: string
}

export const App = () => {
    const [fullName, setFullName] = useState("")
    const [companyDomain, setCompanyDomain] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [emailResponse, setEmailResponse] = useState<EmailResponse>()

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()

        setIsLoading(true)

        const emailResponse = await deriveEmail(fullName, companyDomain)
        setEmailResponse(emailResponse)

        setIsLoading(false)
    }

    return (
        <>
            <Header/>
            <main>
                <form onSubmit={handleSubmit}>
                    <TextInput id={"full_name"} label={"Full Name"} value={fullName} disabled={isLoading}
                               setValue={setFullName}/>
                    <TextInput id={"company_domain"} label={"Company Domain"} value={companyDomain} disabled={isLoading}
                               setValue={setCompanyDomain}/>
                    <SubmitButton disabled={isLoading}/>
                    {emailResponse?.email && <ResponseCard text={emailResponse.email} isError={false}/>}
                    {emailResponse?.error && <ResponseCard text={emailResponse.error} isError={true}/>}
                </form>
            </main>
        </>
    )
}