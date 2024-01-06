export interface EmailResponse {
    email: string
    error: "unknownDomain" | "incorrectFullName" | string
}

export const deriveEmail = (fullName: string, companyDomain: string) => {
    return fetch(
        "http://localhost:3001/derive",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({full_name: fullName, company_domain: companyDomain})
        })
        .then(response => response.json())
        .then((emailResponse: EmailResponse) => emailResponse)
}