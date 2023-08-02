
import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";


interface Props {
    gameQuery: GameQuery
}


const GameGrid = ({ gameQuery }: Props) => {

    const {
        error,
        data,
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage
    } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (error) return <Text>{error.message}</Text>
    const fetchPageCount = data?.pages.reduce((acc, cur) => acc + cur.results.length, 0) || 0
    return (
        <>
            <InfiniteScroll 
            dataLength={fetchPageCount}
            next={ () => fetchNextPage()}
            hasMore={!!hasNextPage}
            loader={<Spinner/>}
            
            
            >
                <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding='5px' spacing={6}>

                    {isLoading && skeletons.map(skeleton =>
                        <GameCardContainer key={skeleton} >
                            <GameCardSkeleton />
                        </GameCardContainer>)}
                    {data?.pages.map((page, index) => (
                        <React.Fragment key={index}>
                            {page.results.map((game) => (
                                <GameCardContainer key={game.id}>
                                    <GameCard game={game} />
                                </GameCardContainer>
                            ))}
                        </React.Fragment>
                    ))}
                    {/* {data?.pages.map((page, index) =>
                    <React.Fragment key={index}>
                        {page.results.map((game) => (
                            <GameCardContainer key={game.id} >
                                <GameCard game={game} />
                            </GameCardContainer>
                        ))}
                    </React.Fragment>
                )} */}

                </SimpleGrid>
            </InfiniteScroll>
            {/* {hasNextPage &&
                <Button onClick={() => fetchNextPage()}>
                    {isFetchingNextPage ? 'Loading...' : 'Load more'}
                </Button>
            } */}
        </>
    )
}

export default GameGrid