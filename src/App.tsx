import React, {useState} from 'react';
import {Header} from "./components/Header";
import {EmailForm} from "./components/EmailForm";
import {EmailAlert} from "./components/Alert/EmailAlert";
import {ErrorAlert} from "./components/Alert/ErrorAlert";
import {EmailResponse} from "./queries/deriveEmail";

export const App = () => {
    const [emailResponse, setEmailResponse] = useState<EmailResponse>()

    const errorExplanation = (emailResponse: EmailResponse) => {
        switch (emailResponse.error) {
            case "unknownDomain":
                return "Email addresses for the requested domain can't be derived"
            case "incorrectFullName":
                return "The given full name seems wrongly formatted. Make sure it follows the following format: \"Surname Lastname\""
            default:
                return "Something has gone wrong, please check the full name and domain again"
        }
    }

    return (
        <>
            <Header/>
            <main className={"p-4 w-full max-w-xs "}>
                <EmailForm setEmailResponse={setEmailResponse}/>
                {emailResponse?.email && <EmailAlert text={emailResponse.email}/>}
                {emailResponse?.error && <ErrorAlert text={errorExplanation(emailResponse)}/>}
            </main>
        </>
    )
}