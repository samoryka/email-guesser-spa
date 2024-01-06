
interface ResponseCardProps {
    text: string
    isError: boolean
}

export const ResponseCard = ({text, isError}: ResponseCardProps) => <div>{text}</div>