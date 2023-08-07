import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Movie } from "../../../../express/models/Movies"; // TODO: Change to @ import later

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Flex w="300px" bgColor="grey" columnGap="10px" padding="5px">
      <Image
        src="/assets/MovieCover.jpg"
        alt="cover"
        width={100}
        height={133}
        style={{
          filter: `sepia(${(movie.title.length % 10) / 10})`,
        }}
      />
      <Flex flexDir="column" rowGap="20px">
        {/* <Flex justifyContent="space-between"> */}
        <Text>{movie.title}</Text>
        {/* <Text>{movie.rated}</Text> */}
        {/* </Flex> */}
        {/* <Text>{movie.plot}</Text> */}
        {/* <Text>{movie.directors?.join(", ")}</Text> */}
      </Flex>
    </Flex>
  );
};
