import styles from './card.module.css'

const Card = props => (
        <a href={`movie?movieId=${props.id}`} className={styles.card} key={props.id}>
            <h3>{ props.title }</h3>
        <button>Add to favorite</button>
        </a>
  );
  
  export default Card;