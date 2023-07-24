import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

import useGenres, { Genres } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url";



interface Props {
    selectedGenres: (genres: Genres) => void
}

const GenreList = ({ selectedGenres }: Props) => {
    const { data, isLoading } = useGenres();

    if (isLoading) return <Spinner />
    return (
        <>


            <List>
       
                {data.map(genre =>
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                       
                            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                            <Button onClick={() => selectedGenres(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                        </HStack>
                    </ListItem>
                )}
            </List>

        </>
    )
}

export default GenreList