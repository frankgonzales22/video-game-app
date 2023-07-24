import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Games } from "../hooks/useGames"
import PlatformList from "./PlatformList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/image-url"

interface GameCardProps {
    game: Games
}


const GameCard = ({ game }: GameCardProps) => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatformList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>

    )
}

export default GameCard