import React, { useContext } from 'react'
import { FavoritesContext } from '../store/context/favorites-context'
import MealsList from '../components/MealsList/MealsList'
import { MEALS } from '../data/dummy-data'
import { StyleSheet, Text, View } from 'react-native'

const FavoruteScreen = () => {
    const favoritesMealsCtx = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter(meal => favoritesMealsCtx.ids.includes(meal.id))
    console.log('favoriteMeals: ',favoriteMeals)

    if(favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorites meals yet.</Text>
            </View>
        )
    }

    return (
        <>
            <MealsList items={favoriteMeals}/>
        </>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }
})

export default FavoruteScreen