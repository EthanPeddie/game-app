import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../../hook/useGame";
import GameCard from "./GameCard";

import GameCardSkeletons from "./GameCardSkeletons";
import { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGame(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  if (error) return <Text>{error}</Text>;
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {isLoading &&
          skeleton.map((skeletons) => <GameCardSkeletons key={skeletons} />)}
        {data.map((game) => (
          <GameCard games={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
