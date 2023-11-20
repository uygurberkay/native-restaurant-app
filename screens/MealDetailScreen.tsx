import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import { COLORS } from '../constants/colors';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

const MealDetailScreen = ({route, navigation}: any) => {
    /* To use useContext hook */
    // const favoriteMealsCtx =  useContext(FavoritesContext)
    
    /* To use Redux hook */
    const favoriteMealIds = useSelector((state: any) => state?.favoriteMeals?.ids);
    const dispatch = useDispatch()

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId) // with useContext hook
    const mealIsFavorite = favoriteMealIds.includes(mealId)

    const changeFavoriteStatusHandler = () => {
        if(mealIsFavorite) {
            // favoriteMealsCtx.removeFavorite(mealId); // with useContext hook
            dispatch(removeFavorite({id : mealId}));
        }else {
            // favoriteMealsCtx.addFavorite(mealId); // with useContext hook
            dispatch(addFavorite({ id : mealId}));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                    icon={mealIsFavorite ? 'star' : 'star-o'} 
                    color={COLORS.light} 
                    onPress={changeFavoriteStatusHandler} />
            },
        })
    }, [navigation, changeFavoriteStatusHandler])
    
    return (
        <ScrollView style={styles.screen}>
            {/* Individual Meal List */}
            <Image style={styles.image} source={{uri: selectedMeal?.imageUrl}}/>
            <Text style={styles.title}>{selectedMeal?.title}</Text>
            <View>
                <MealDetails 
                    duration={selectedMeal?.duration!} 
                    complexity={selectedMeal?.complexity!} 
                    affordability={selectedMeal?.affordability!}
                    style={{}}
                    textStyle={styles.detailedText}
                    />
            </View>
            <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal?.ingredients}/>
                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal?.steps}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        marginBottom: 32,
    },
    image: {
        height: 300,
        width: '100%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: COLORS.light
    },
    detailedText: {
        color: COLORS.light
    },
    subTitle: {
        color: COLORS.titleBackground,
        fontSize: 18,
        fontWeight: 'bold',
        margin: 6,
        textAlign: 'center',
    },
    subTitleContainer: {
        padding: 6,
        borderBlockColor: COLORS.titleBackground,
        borderBottomWidth: 2,
        marginHorizontal: 24,
        marginVertical: 4,
    },
    listContainer: {
        width: '80%',
        alignSelf: 'center',
    },
});

export default MealDetailScreen