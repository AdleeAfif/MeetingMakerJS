import { useContext } from 'react';
import FavouritesContext from '../store/favourite-context';
import MeetupList from '../components/MeetupList';

function Favourites() {
    const favContext = useContext(FavouritesContext);

    let content;

    if (favContext.totalFavourites === 0){
        content = <p>No Favourites Is Added Yet. Start Adding!</p>
    }
    else{
        content = <MeetupList meetups={favContext.favourites}/>
    }

    return <section>
        <h1>FAVOURITES</h1>
        {content}
    </section>;
}

export default Favourites;

//It is important to know that all this favs will be lost when reloaded as it only use useState and useContext memory.
//It can be saved by using browser storage or server to be permanent.