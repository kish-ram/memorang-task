import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MovieDetails from "../../../components/MovieDetails";
import {
    ApolloClient,
    InMemoryCache,
    useQuery,
    useMutation,
    gql,
  } from "@apollo/client";

const movie = ({movie}) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if(localStorage.getItem('memorang-email')){
      setLoggedIn(true);
    }
  },[])
    console.log(movie)
    console.log(isLoggedIn)
    // const router = useRouter();
    // const {id} = router.query;
    // return (<div>
    //     this is from movie {movie.id}
    // </div>)
    return <MovieDetails {...movie} isLoggedIn={isLoggedIn}/>
}

export const getServerSideProps = async (context) => {
    let movieId = context.params.id;
    const client = new ApolloClient({
        uri: "https://2e8ui9n2p8.execute-api.us-east-1.amazonaws.com/dev/graphql",
        cache: new InMemoryCache(),
      });
    
      const { data, loading, error } = await client.query({
        query: gql`
        query {
            movie(id: ${movieId}) {
              title,
              id,
              overview,
              release_date,
              imageUrl,
              runtime,
              genres{
                  name
              }
            }
          }
              `,
      });
      if(loading) return "<div>Loading.!</div>";
      if(error) return "<div>Errror.!</div>";
      console.log('hereee');
      console.log(data);
      return { props: {movie: data.movie} };
}

export default movie;