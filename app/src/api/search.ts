import axios from "axios";
import { Movie } from "../../../express/models/Movies";

export const getMovies = async (searchQuery: string) => {
  console.log(axios.defaults.baseURL);
  axios.defaults.baseURL = "http://localhost:8000/";
  console.log(axios.defaults.baseURL);

  const { data } = await axios.get<{ movies: Movie[] }>("/movies", {
    params: { searchQuery },
  });

  return data.movies;
};
