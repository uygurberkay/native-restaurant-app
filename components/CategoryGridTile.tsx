import { View, Text, Pressable, StyleSheet, Platform } from 'react-native'
import React from 'react'

interface TileProps {
    title: string,
    color: string,
    onPress: any,
}

const CategoryGridTile = ({title, color, onPress}: TileProps) => {
    return (
        <View style={styles.gridItem}>
            <Pressable 
                android_ripple={{color: '#cccccc'}}
                style={
                    ({pressed}) => [styles.button , pressed ? styles.buttonPressed : null]}  // android_ripple for IOS
                    onPress={onPress}
                >
                <View style={{...styles.innerContainer, backgroundColor: color}}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 12,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: .25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button: {
        flex:1,
    },
    innerContainer: {
        flex:1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 12,
    },
    buttonPressed: {
        opacity: .5,
        backgroundColor: '#cccccc'
    },
})

export default CategoryGridTile