import Card from '../interface/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
    return <li className={classes.item}>
        <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>Title: {props.title}</h3>
                <address>Address: {props.address}</address>
                <p>Description: {props.description}</p>
            </div>
            <div className={classes.actions}>
                <button>To Favourites</button>
            </div>
        </Card>
    </li>
}

export default MeetupItem;