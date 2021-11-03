import styles from './card.module.css'

const favClickListner = () => {
    console.log('here');
    console.log(event);
}

const Card = props => (
        <a href={`movie?movieId=${props.id}`} className={styles.card} key={props.id}>
            <h3>{ props.title }</h3>
        </a>
  );
  
  export default Card;