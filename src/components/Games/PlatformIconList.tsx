import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../../hook/useGame";

import {
  FaWindows,
  FaApple,
  FaAndroid,
  FaPlaystation,
  FaXbox,
  FaLinux,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { GiGlobe } from "react-icons/gi";
import { IconType } from "react-icons";

interface Props {
  p: Platform[];
}
const PlatformIconList = ({ p }: Props) => {
  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    xbox: FaXbox,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: GiGlobe,
  };

  return (
    <HStack color="gray.500" marginY={3}>
      {p.map((p) => (
        <Icon as={IconMap[p.slug]} key={p.id} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
