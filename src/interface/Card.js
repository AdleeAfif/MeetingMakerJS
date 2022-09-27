import classes from './Card.module.css';

function Card(props) {
    return <div className={classes.card}>
        {props.children}
    </div>
}

export default Card;

//props.children stores all the data contains in the opening and closing of the Card class inside MeetupItem.js