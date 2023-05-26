import { Badge } from "@chakra-ui/react";
import { Game } from "../../hook/useGame";

interface Props {
  score: Game;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Badge colorScheme="green" borderRadius={4} fontSize={"14px"}>
      {score.metacritic}
    </Badge>
  );
};

export default CriticScore;
