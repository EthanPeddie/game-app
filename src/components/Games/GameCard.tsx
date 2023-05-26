import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../../hook/useGame";
import ImageCrop from "../ImageCrop";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import Emoji from "../emoji";

interface Props {
  games: Game;
}

const GameCard = ({ games }: Props) => {
  return (
    <Card borderRadius={6} overflow="hidden" marginY={2}>
      <Image src={ImageCrop(games.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList p={games.parent_platforms.map((g) => g.platform)} />
          <CriticScore score={games} />
        </HStack>
        <Heading fontSize="2xl">
          {games.name}
          <Emoji rating={games.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
