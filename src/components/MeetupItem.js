import Card from '../interface/Card';
import classes from './MeetupItem.module.css';
import { useContext } from 'react';
import FavouritesContext from '../store/favourite-context';

function MeetupItem(props) {
    const favContext = useContext(FavouritesContext);
    const itemIsFav = favContext.itemIsFavourite(props.id);

    function toggleFavouritesStatusHandler() {
        if(itemIsFav) {
            favContext.removeFavourite(props.id);
        }
        else{
            favContext.addFavourite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            });
        }
    }

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
                <button onClick={toggleFavouritesStatusHandler}>
                    {itemIsFav ? 'Remove Favourites' : 'Add Favourites'}
                </button>
            </div>
        </Card>
    </li>
}

export default MeetupItem;