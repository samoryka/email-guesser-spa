import React, {FormEvent, useState} from 'react';
import {deriveEmail} from "./queries/deriveEmail";

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

    return (<form onSubmit={handleSubmit}>
            <label htmlFor={"full_name"}> Full name</label>
            <input id={"full_name"} value={fullName} onChange={(event) => setFullName(event.target.value)}/>
            <label htmlFor={"company_domain"}>Company domain</label>
            <input id={"company_domain"} value={companyDomain}
                   onChange={(event) => setCompanyDomain(event.target.value)}/>
            <input type="submit" disabled={isLoading}/>
            {(emailResponse?.email || emailResponse?.error) &&
                <span>{emailResponse.email || emailResponse.error}</span>}
        </form>
    )
}