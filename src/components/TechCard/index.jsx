import { Card } from "./styles"

export const TechCard = ({title, status, onClick}) => {
    return (
        <Card onClick={onClick}>
            <p>{title}</p>
            <span>{status}</span>
        </Card>
    )
}
