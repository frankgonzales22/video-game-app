import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

interface Props {
    inputSearch: (e : string) => void
}

const SearchInput = ({ inputSearch }: Props) => {

    const ref = useRef<HTMLInputElement>(null)

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (ref.current)  inputSearch(ref.current.value)
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch color='gray.500' />} />
                <Input ref={ref} borderRadius={20} placeholder="Search games..." variant='filled' />
            </InputGroup>
        </form>
    )
}

export default SearchInput