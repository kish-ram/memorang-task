import Head from "next/head";
import Card from '../components/card';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { useState } from "react";

export const siteTitle = "MMDb | Search";

export default function Search({ movies }) {
    console.log('movies', movies);
    let [moviesState, setMovies] = useState([]);
    console.log(movies);
    const searchHandler = async (event) => {
        let searchSlug = event.target.value;
        if(searchSlug.length>2){
            console.log('searchSlug');
            console.log(searchSlug);
            let data = await fetchMovies(searchSlug);
            console.log('here')
            console.log(data);
            setMovies(data.props.movies);
        }
    }
  return (
    <div className="container">
      <Head>
      <title>{siteTitle}</title>
      </Head>

      <main>
        <h1 className="title">
            Find movies!
        </h1>

        <p className="description">
          Get started by typing few characters
        </p>

        <input type="text" placeholder="Search movies by title..." onChange={searchHandler}></input>

        <div className="grid">
            
  
  {moviesState.map(movie => {
    return (
        <Card {...movie}/>
    );
  })}
  </div>
      </main>



      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export async function fetchMovies(searchSlug) {
    // let searchSlug = event.target.value
    const client = new ApolloClient({
        uri: 'https://2e8ui9n2p8.execute-api.us-east-1.amazonaws.com/dev/graphql',
        cache: new InMemoryCache()
    });
    
        const { data, loading, error } = await client.query({
            query: gql`
            query {
              movies(title: "${searchSlug}") {
                title,id
              }
            }
          `
          });
        console.log('data');
        console.log(data);
        return {
          props: {
            movies: data.movies
          }
        }
    return {
        props: {
            movies: []
        }
    }
}

export async function getStaticProps() {
    return {
      props: {
        movies: []
      }
    }
  }