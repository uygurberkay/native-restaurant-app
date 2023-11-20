import { createContext, useState } from 'react';

interface ContextType {
    ids: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
}

export const FavoritesContext = createContext<ContextType>({
    ids: [],
    addFavorite: (id: string) => {},
    removeFavorite: (id: string) => {}
});

const FavoritesContextProvider = ({children}: any) => {
    const [favoritesMealIds, setFavoritesMealIds] = useState<string []>([]);

    /* Adds Favorite Functionality */
    const addFavorite = (id: string) => {
        setFavoritesMealIds((currentFavIds) => [...currentFavIds, id]);
    }

    /* Removes Favorite Functionality */
    const removeFavorite = (id: string) => {
        setFavoritesMealIds((currentFavIds) => 
            currentFavIds.filter((mealId) => mealId !== id) // Keeps the mealId that does not match with input value
        );
    }

    const value = {
        ids: favoritesMealIds,
        addFavorite,
        removeFavorite,
    }


    return (
        <>
            <FavoritesContext.Provider value={value}>
                {children}
            </FavoritesContext.Provider>
        </>
    )
}

export default FavoritesContextProvider;