import { createContext, useState } from 'react-dom';

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0
});

function FavouritesContextProvider(props){

    const [userFavourites, setUserFavourites] = useState([]);

    function addFavouriteHandler(favouriteMeetup) {
        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.concat(favouriteMeetup);
        });
    }

    function removeFavouriteHandler(meetupId) {
        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function favouriteItemHandler(meetupId) {
        return userFavourites.some(meetup => meetup.id === meetupId);

    }

    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
    };

    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}