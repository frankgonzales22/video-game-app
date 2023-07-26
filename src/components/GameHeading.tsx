import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"

interface Props {
    gquery: GameQuery
}

const GameHeading = ({ gquery }: Props) => {
    const heading = `${gquery.platform?.name || ''} ${gquery.genre?.name || ''} Games`

    return (

        <Heading as={'h1'} marginTop={9} marginBottom={3}fontSize='5xl'>
            {heading}
        </Heading>
    )
}

export default GameHeading