import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre, { Genre } from "../../hook/useGenre";
import GameCardLoading from "../Games/GameCardLoading";
import ImageCrop from "../ImageCrop";

interface Props {
  onSelectedGenre: (genres: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, error, isLoading } = useGenre();
  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading && <GameCardLoading />}
      <List paddingX={6}>
        {data.map((genres) => (
          <ListItem key={genres.id}>
            <HStack paddingY={2}>
              <Image
                src={ImageCrop(genres.image_background)}
                borderRadius={7}
                boxSize={"40px"}
              />
              <Button
                fontWeight={genres.id === selectedGenre?.id ? "bold" : ""}
                fontSize="lg"
                key={genres.id}
                variant={"link"}
                onClick={() => onSelectedGenre(genres)}
              >
                {genres.name === "Massively Multiplayer"
                  ? "Multiplayer"
                  : genres.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
