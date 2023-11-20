import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors';

const List = ({data}:any) => {
    return (
        <>
            {data.map((dataPoint: any) => (
                <View  key={dataPoint} style={styles.listItem}>
                    <Text style={styles.itemText}>{dataPoint}</Text>
                </View>
            ))}
        </>
    )
}


const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: COLORS.titleBackground,
    },
    itemText: {
        color: COLORS.background,
        textAlign: 'center',
    },
});

export default List