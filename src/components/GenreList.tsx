import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url";



interface Props {
    selectedGenres: (genres: Genres) => void,
    genreFontWeight : Genres | null
}

const GenreList = ({ selectedGenres, genreFontWeight }: Props) => {
    const { data, isLoading } = useGenres();

    if (isLoading) return <Spinner />
    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List>       
                {data.map(genre =>
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} objectFit="cover" />
                            <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === genreFontWeight?.id ? 'bold' : 'normal'} onClick={() => selectedGenres(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                        </HStack>
                    </ListItem>
                )}
            </List>

        </>
    )
}

export default GenreList