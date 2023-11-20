import React, { useContext } from 'react'
import { FavoritesContext } from '../store/context/favorites-context'
import { useSelector, useDispatch } from 'react-redux';
import MealsList from '../components/MealsList/MealsList'
import { MEALS } from '../data/dummy-data'
import { StyleSheet, Text, View } from 'react-native'
const FavoruteScreen = () => {
    /* To use useContext hook */
    // const favoritesMealsCtx = useContext(FavoritesContext);

    /* To use Redux hook */
    const favoriteMealsIds = useSelector((state: any) => state?.favoriteMeals?.ids)
    console.log(favoriteMealsIds)
    // const favoriteMeals = MEALS.filter(meal => favoritesMealsCtx.ids.includes(meal.id)) // with useContext hook

    const favoriteMeals = MEALS.filter(meal => favoriteMealsIds.includes(meal.id))

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