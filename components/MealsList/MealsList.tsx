import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import MealItem from './MealItem'

const MealsList = ({items}: any) => {

    /* Renders MealItem component */
    const renderMealItem = (itemData: any) => {
        
        const mealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            duration: itemData.item.duration,
            imageUrl: itemData.item.imageUrl,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability,
        }

        return (
            <MealItem {...mealItemProps}/>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList 
                data={items}
                keyExtractor={item => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})

export default MealsList