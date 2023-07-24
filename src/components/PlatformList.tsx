import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { Platform } from "../hooks/useGames"
import { HStack, Icon, Text } from "@chakra-ui/react"
import { IconType } from 'react-icons'

interface PlatformListProps {
    platforms: Platform[]
}

const PlatformList = ({ platforms }: PlatformListProps) => {
    const iconMap :{[key : string] : IconType} = {
        pc : FaWindows,
        playstation : FaPlaystation,
        xbox : FaXbox,
        nintendo : SiNintendo,
        mac : FaApple,
        linux : FaLinux,
        android : FaAndroid,
        ios : MdPhoneIphone,
        web : BsGlobe
    }


    return (

        <HStack>
            {/* {platforms.map((platform) => <Text key={platform.id}>{platform.name}</Text>)} */}
            {platforms.map(platform => 
                <Icon as={iconMap[platform.slug]}/>
                )}
        </HStack>
    )
}

export default PlatformList