import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorSwitchMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "light"}
        onChange={toggleColorMode}
      />
      <Text fontSize="lg" whiteSpace={"nowrap"}>
        Light Mode
      </Text>
    </HStack>
  );
};

export default ColorSwitchMode;
