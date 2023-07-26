import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

interface Props {
  inputSearch: (e : string) => void
}

const NavBar = ({inputSearch}: Props) => {
  return (
    <HStack justifyContent='space-between' padding={`10px`}>
        <Image src={logo} boxSize={`60px`}/>
        <SearchInput inputSearch={inputSearch}/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar