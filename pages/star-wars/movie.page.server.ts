import fetch from "node-fetch";
import { MovieDetails } from "./types";

export { onBeforeRender };
export { filterMovieData };

type ContextProps = {
  movieId: string;
  pageProps: {
    movie: MovieDetails;
  };
  docTitle: string;
};

async function onBeforeRender(
  contextProps: ContextProps
): Promise<any> {
  const response = await fetch(
    `https://swapi.dev/api/films/${contextProps.movieId}`
  );
  let movie = (await response.json()) as MovieDetails;

  // We remove data we don't need because we pass `contextProps.movie` to
  // the client; we want to minimize what is sent over the network.
  movie = filterMovieData(movie);

  // The page's <title>
  const docTitle = movie.title;

  return {
    pageContext: {
    pageProps: {
      movie,
    },
    docTitle,
    }
  };
}

function filterMovieData(
  movie: MovieDetails & Record<string, unknown>
): MovieDetails {
  const { title, release_date, director, producer } = movie;
  // @ts-ignore
  movie = { title, release_date, director, producer };
  return movie;
}
