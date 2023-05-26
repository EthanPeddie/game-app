import { Image, ImageProps } from "@chakra-ui/react";
import bullEye from "../assets/images/bulls-eye.webp";
import meh from "../assets/images/meh.webp";
import thumbs from "../assets/images/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const image: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: bullEye, alt: "recommended", boxSize: "25px" },
    5: { src: thumbs, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...image[rating]} boxSize={"40px"} marginTop={1} />;
};

export default Emoji;
