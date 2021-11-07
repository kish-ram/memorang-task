import Link from "next/link";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Card, Button } from "react-bootstrap";

const Favorites = ({ favorites }) => {
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
