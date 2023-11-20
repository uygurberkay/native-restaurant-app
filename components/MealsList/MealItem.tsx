import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MealDetails from '../MealDetails';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
    any
>;

interface  MealItemProps {
    id: string;
    title: string;
    imageUrl: string;
    duration: number;
    complexity: string;
    affordability: string;
}

const MealItem = ({id, title, imageUrl, duration, complexity, affordability}: MealItemProps) => {
    const navigation = useNavigation<ProfileScreenNavigationProp>();

    /* Throws params to the MealDetailScreen page */
    const selectMealItemHandler = () => {
        navigation.navigate('MealDetail', {
            mealId: id,
        })
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{color: 'gray'}}
                style={
                    ({pressed}) => [pressed ? styles.buttonPressed : null]}  // android_ripple for IOS
                onPress={selectMealItemHandler}
                >
                <View style={styles.innerContainer}>
                    <Image style={styles.image} source={{uri: imageUrl}}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails 
                    duration={duration} 
                    complexity={complexity} 
                    affordability={affordability}
                    style={{}}
                    textStyle={{}}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 20,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 8,
        shadowColor: 'black',
        shadowOpacity: .5,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 16,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },buttonPressed: {
        opacity: .5,
        backgroundColor: '#cccccc'
    },
})

export default MealItem