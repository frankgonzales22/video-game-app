
import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'


export interface GameQuery {
    genreId?: number ;
    platformId?: number; 
    sortOrder: string;
    searchText: string;
    
}
function App() {

    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
    // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
    // const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null)


    return <Grid templateAreas={{

        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"` //1024px
    }}
        templateColumns={{
            base: '1fr',
            lg: '200px 1fr'
        }}

    >

        <GridItem area='nav'>
            {/* {JSON.stringify(selectedGenre)} */}
            <NavBar inputSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
        </GridItem>
        <Show 
        above='lg'
    
        >

            <GridItem area='aside' paddingX={5}>
                <GenreList genreFontWeightId={gameQuery.genreId} selectedGenres={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })} />
            </GridItem>
        </Show>
        <GridItem area='main'>
            <Box paddingLeft={2}>
                <GameHeading gquery={gameQuery}/>
                <HStack  marginBottom={5}>
                    <PlatformSelector selectedPlatformId={gameQuery.platformId} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platformId: platform.id })} />
                    <SortSelector sortOrder={gameQuery.sortOrder} onSelectOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
                </HStack>
            </Box>
            <GameGrid gameQuery={gameQuery} />
        </GridItem>

    </Grid>
}

export default App
