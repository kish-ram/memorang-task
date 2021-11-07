import Link from "next/link";
import Router from 'next/router';
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Card, Button } from "react-bootstrap";

const Favorites = ({isLoggedIn, favorites}) => {
  console.log('isLoggedin')
  console.log(isLoggedIn);
  if(!isLoggedIn){
      return <p>Please <Link href='/login'>login</Link> to continue</p>;
  }
  return favorites.map((favorite) => {
    return (
      <Card style={{ width: "18rem" }}>
        
        <Card.Body>
          
          <Link key={favorite.movieId} href="/movie/[id]" as={`/movie/${favorite.movieId}`}>
            <Card.Title style={{cursor:"pointer"}}>{favorite.title}</Card.Title>
          </Link>
          <Button variant="warning">
            Remove from Favorite <BsHeartFill />
          </Button>
        </Card.Body>
        
      </Card>
    );
  });
};

export default Favorites;
