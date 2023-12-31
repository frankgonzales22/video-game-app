import { Box, Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Games } from "../hooks/useGames"
import PlatformList from "./PlatformList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/image-url"
import Emoji from "./Emoji"

interface GameCardProps {
    game: Games
}


const GameCard = ({ game }: GameCardProps) => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody >
                <HStack justifyContent='space-between' marginBottom={3} >
                    <PlatformList platforms={game?.parent_platforms?.map(p => p.platform)} />
                    <CriticScore score={game.metacritic}/>
                </HStack>
                <Heading fontSize='2xl'>
                    {game.name}
                    <Emoji rating={game.rating_top}/>
                </Heading>
            </CardBody>
        </Card>

    )
}

export default GameCard