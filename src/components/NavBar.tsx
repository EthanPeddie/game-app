import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/images/logo.webp";
import ColorSwitchMode from "./ColorSwitchMode";
import SearchInput from "./SearchGames/SearchInput";

interface Props {
  onSearch: (searchGame: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding={4}>
      <Image src={Logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorSwitchMode />
    </HStack>
  );
};

export default NavBar;
