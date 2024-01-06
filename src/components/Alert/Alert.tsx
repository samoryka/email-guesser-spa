export const AlertContent = ({title, body}: { title: string, body: string }) => (
    <>
        <h2 className={"font-bold mb-2"}>{title}</h2>
        <p>{body}</p>
    </>
)

export interface AlertProps {
    text: string
}

