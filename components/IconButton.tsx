import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

interface IconButtonProps {
    icon: any;
    color: string;
    onPress: any;
}

const IconButton = ({icon, color, onPress}: IconButtonProps) => {
    return (
        <View>
            <Pressable 
                onPress={onPress} 
                style={({pressed}) => pressed && styles.pressed}>
                <FontAwesome name={icon} size={24} color={color} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    pressed: {
        opacity: .7,
    }
})

export default IconButton