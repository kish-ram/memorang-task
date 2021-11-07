import Link from 'next/link';
import Moment from 'react-moment';
import { Button } from 'react-bootstrap';
import { BsHeart, BsHeartFill } from "react-icons/bs";

import styles from "../styles/MovieDetails.module.css";

const MovieDetails = (data) => (
  <div className={styles.card}>
      <img className={styles.poster} src={data.imageUrl} />
      <h2>{data.title}</h2>
      <p><span className={styles.spans}>Synopsis:</span>{data.overview}</p>
      <p><span className={styles.spans}>Year of release:</span>
      <Moment format="YYYY">
        { data.release_date }
      </Moment>
      </p>
      <p><span className={styles.spans}>Runtime:</span>{data.runtime > 0 ? `${data.runtime} minutes` : 'not available'}</p>
      <p><span className={styles.spans}>Genres:</span>
          {
            data.genres.length > 0 ? 
              data.genres.map((el,idx) => {
                  if(idx === (data.genres.length -1))
                    return `${el.name}`
                  return `${el.name}, `
              }) : '-'
          }
      </p>
      {data.isLoggedIn ? data.isFavorite ? <Button variant="warning">
        Remove from Favorite <BsHeartFill />
      </Button> : <Button variant="success">
        Mark as Favorite <BsHeart />
      </Button> : <Link href="/login"><Button variant="primary">Login to mark favorite</Button></Link>
      }
  </div>
);

export default MovieDetails;
