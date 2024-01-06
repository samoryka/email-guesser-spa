import React, {useState} from 'react';
import {ResponseCard} from "./components/ResponseCard";
import {Header} from "./components/Header";
import {EmailForm} from "./components/EmailForm";

interface EmailResponse {
    email: string
    error: string
}

export const App = () => {
    const [emailResponse, setEmailResponse] = useState<EmailResponse>()

    return (
        <>
            <Header/>
            <main>
                <EmailForm setEmailResponse={setEmailResponse}/>
                {emailResponse?.email && <ResponseCard text={emailResponse.email} isError={false}/>}
                {emailResponse?.error && <ResponseCard text={emailResponse.error} isError={true}/>}
            </main>
        </>
    )
}