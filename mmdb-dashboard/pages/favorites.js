import Head from "next/head";
import Favorites from '../components/Favorites';
import {
    ApolloClient,
    InMemoryCache,
    useQuery,
    useMutation,
    gql,
  } from "@apollo/client";

export const siteTitle = "MMDb | My Favorites";

const favorite = ({favorites}) => {
    console.log(favorites)
    return (
        <div>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          {favorites.length>0 && <Favorites favorites={favorites}/> }
        </div>
      );
}

export const getServerSideProps = async (context) => {
    let userId = "1324";
    const client = new ApolloClient({
        uri: "https://2e8ui9n2p8.execute-api.us-east-1.amazonaws.com/dev/graphql",
        cache: new InMemoryCache(),
      });
    
      const { data, loading, error } = await client.query({
        query: gql`
        query {
            favorites(userId: "${userId}") {
                title
                status
                movieId
              }
            }`,
      });
      if(loading) return "<div>Loading.!</div>";
      if(error) return "<div>Errror.!</div>";
      console.log('hereee');
      console.log(data);
      return { props: {favorites: data.favorites} };
}

export default favorite;
