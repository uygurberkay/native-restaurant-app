import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealsList/MealItem';
import MealsList from '../components/MealsList/MealsList';

/* 
MealsOverViewScreen that displays spesific 
Menu defined by id from category.ts models
*/
const MealsOverviewScreen = ({navigation, route}: any) => {
    const catId = route.params.caregoryId; // Screens communicate each others with params
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    /* Displays Menu Title */
    const categoryTitle = CATEGORIES.find((category) => category.id === catId)?.title;
        
    useLayoutEffect(() => {
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [])

    // useEffect(() => {
    //     navigation.setOptions({
    //         title: categoryTitle,
    //     });
    // }, [])
    
    return (
        <MealsList items={displayedMeals}/>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})

export default MealsOverviewScreen