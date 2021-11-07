import Moment from 'react-moment';
import { Button } from 'react-bootstrap';
import { BsHeart, BsHeartFill } from "react-icons/bs";

import styles from "../styles/MovieDetails.module.css";

const MovieDetails = (movie) => (
  <div className={styles.card}>
      <img className={styles.poster} src={movie.imageUrl} />
      <h2>{movie.title}</h2>
      <p><span className={styles.spans}>Synopsis:</span>{movie.overview}</p>
      <p><span className={styles.spans}>Year of release:</span>
      <Moment format="YYYY">
        { movie.release_date }
      </Moment>
      </p>
      <p><span className={styles.spans}>Runtime:</span>{movie.runtime} minutes</p>
      <p><span className={styles.spans}>Genres:</span>
          {
              movie.genres.map((el,idx) => {
                  if(idx === (movie.genres.length -1))
                    return `${el.name}`
                  return `${el.name}, `
              })
          }
      </p>
      <Button variant="success">
        Mark as Favorite <BsHeart />
      </Button>
      {" "}
      <Button variant="warning">
        Remove from Favorite <BsHeartFill />
      </Button>
  </div>
);

export default MovieDetails;
