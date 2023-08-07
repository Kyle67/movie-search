import { getMovies } from "@/api/search";
import { MovieCard } from "@/components/search/MovieCard";
import { Flex, Input, Text, chakra } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { useQuery } from "react-query";

import image from "../../../public/assets/searchImage.jpg";

interface ParamsProps {
  query: string;
}

const Search = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(router.query.query ?? "");
  const [text, setText] = useState("");

  const { data } = useQuery(["movies", searchQuery], () =>
    getMovies(searchQuery)
  );

  useEffect(() => {
    console.log({ data });
    console.log({ test: data?.map((movie) => movie.title) });
  }, []);

  const onSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("searched");
    setSearchQuery(text);
  };

  // TODO: Paginate the results, so that you can click the next arrow and go through the pages

  return (
    <MainContainer>
      <Flex flexDir="column">
        <Text>Testing {searchQuery}</Text>
        {/* {data &&
        data?.map((movie) => {
          <Text key={movie.title} color="red">
            {movie.title}
          </Text>;
        })} */}
        <form onSubmit={(e) => onSearch(e)}>
          <Input onChange={(e) => setText(e.target.value)} value={text} />
        </form>
        <Flex>
          <Flex
            flexDir="column"
            minW="20%"
            margin="20px"
            bgColor="grey"
            borderRadius={15}
            padding="5px"
          >
            <Text>Testing</Text>
            <Text>Testing2</Text>
            <Text>Testing3</Text>
          </Flex>
          <Flex flexWrap="wrap" gap="20px">
            {data &&
              data.map((movie) => (
                <MovieCard key={movie.title} movie={movie} />
              ))}
          </Flex>
        </Flex>
      </Flex>
    </MainContainer>
  );
};

export default Search;

const MainContainer = chakra(Flex, {
  baseStyle: {
    height: "100vh",
    backgroundImage: image.src,
    backgroundSize: "cover",
    // backgroundPositionX: { base: -400, xl: -200 },
  },
});
