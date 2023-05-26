import { Center, Spinner } from "@chakra-ui/react";

const GameCardLoading = () => {
  return (
    <>
      <Center>
        <Spinner
          thickness="10px"
          speed="0.65s"
          emptyColor="red.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    </>
  );
};

export default GameCardLoading;
