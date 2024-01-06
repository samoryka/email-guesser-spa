import React, {FormEvent, useState} from 'react';

interface EmailResponse {
    email: string
    error: string
}

export const App = () => {
    const [fullName, setFullName] = useState("")
    const [companyDomain, setCompanyDomain] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState<string>()
    const [error, setError] = useState<string>()
    const deriveEmail = async (event: FormEvent) => {
        event.preventDefault()

        setIsLoading(true)
        fetch(
            "http://localhost:3001/derive",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({full_name: fullName, company_domain: companyDomain})
            })
            .then(response => response.json())
            .then((emailResponse: EmailResponse) => {
                const {email, error} = emailResponse
                setEmail(email)
                setError(error)
                setIsLoading(false)
            })
    }

    return (<form onSubmit={deriveEmail}>
            <label htmlFor={"full_name"}> Full name</label>
            <input id={"full_name"} value={fullName} onChange={(event) => setFullName(event.target.value)}/>
            <label htmlFor={"company_domain"}>Company domain</label>
            <input id={"company_domain"} value={companyDomain}
                   onChange={(event) => setCompanyDomain(event.target.value)}/>
            <input type="submit" disabled={isLoading}/>
            {(email || error) && <span>{email || error}</span>}
        </form>
    )
}