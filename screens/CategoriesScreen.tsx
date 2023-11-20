import { View, Text, FlatList } from 'react-native'
import React from 'react'

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({navigation}: any) => {
    
    const renderCategoryItem = (itemData: any) => {
        const pressHandler = () => {
            navigation.navigate('MealsOverview', { // Pushing Params
                caregoryId: itemData.item.id,
            })
        }
        
        
        return ( 
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color} 
                onPress={pressHandler}/>
        )
    }

    return (
        <View>
            <FlatList 
                data={CATEGORIES}
                keyExtractor={item => item.id}
                renderItem={renderCategoryItem}
                numColumns={2}
            />
        </View>
    )
}

export default CategoriesScreen