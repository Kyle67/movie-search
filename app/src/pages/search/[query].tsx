import { Flex, Text } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";

interface ParamsProps {
  query: string;
}

const Search = () => {
  const router = useRouter();
  const { query: searchQuery } = router.query;

  return (
    <Flex>
      <Text>Testing {searchQuery}</Text>
    </Flex>
  );
};

export default Search;
