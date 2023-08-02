import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import useGenres from "../hooks/useGenres"
import usePlatforms from "../hooks/usePlatforms"

interface Props {
    gquery: GameQuery
}

const GameHeading = ({ gquery }: Props) => {

    const { data: genres } = useGenres()
    const genre = genres?.results.find(g => g.id === gquery.genreId)
    const { data: platforms } = usePlatforms()
    const platform = platforms?.results.find(p => p.id === gquery.platformId)




    const heading = `${genre?.name || ''} ${platform?.name || ''} Games`



    return (

        <Heading as={'h1'} marginTop={9} marginBottom={3} fontSize='5xl'>
            {heading}
        </Heading>
    )
}

export default GameHeading