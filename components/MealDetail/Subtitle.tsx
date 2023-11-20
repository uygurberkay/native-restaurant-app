import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors';

const Subtitle = ({children}: any) => {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
        marginHorizontal: 12,
        marginVertical: 4,
    }
});

export default Subtitle