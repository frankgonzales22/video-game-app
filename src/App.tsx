import { useState } from 'react'
import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'


function App() {
    return <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"` //1024px
    }}>
        <GridItem area='nav' bg='coral'>NAV</GridItem>
        <Show above='lg'>
            <GridItem area='aside' bg='lightGreen'>ASIDE</GridItem>
        </Show>
        <GridItem area='main' bg='lightBlue'>MAIN</GridItem>


    </Grid>
}

export default App
