
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genres } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'
import SortSelector from './components/SortSelector'


export interface GameQuery {
    genre: Genres | null;
    platform: Platform | null;
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
            lg: '250px 1fr'
        }}

    >

        <GridItem area='nav'>
            {/* {JSON.stringify(selectedGenre)} */}
            <NavBar inputSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
        </GridItem>
        <Show above='lg'>

            <GridItem area='aside' paddingX={5}>
                <GenreList genreFontWeight={gameQuery.genre} selectedGenres={(genre) => setGameQuery({ ...gameQuery, genre })} />
            </GridItem>
        </Show>
        <GridItem area='main'>
            <HStack paddingLeft={2} marginBottom={5}>
                <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
                <SortSelector sortOrder={gameQuery.sortOrder} onSelectOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
            </HStack>
            <GameGrid gameQuery={gameQuery} />
        </GridItem>

    </Grid>
}

export default App
