import { Badge } from "@chakra-ui/react"

interface Props {
    score: number
}


const CriticScore = ({ score }: Props) => {

    let color = score > 75 ? 'green' : score > 50 ? 'yellow' : ''

    return (
        <Badge display={'block'} colorScheme={color} fontSize='14px' borderRadius='4px' paddingX={2}  >{score}</Badge>
    )
}

export default CriticScore