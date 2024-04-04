import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {

    const friends = [
        { name: 'Friend one', key: '1' },
        { name: 'Friend two', key: '2' },
        { name: 'Friend three', key: '3' },
        { name: 'Friend four', key: '4' },
        { name: 'Friend five', key: '5' },
        { name: 'Friend six', key: '6' },
        { name: 'Friend seven', key: '7' },
        { name: 'Friend eight', key: '8' },
        { name: 'Friend nine', key: '9' },
    ];

   return (
        <FlatList
            horizontal
            keyExtractor={(item) => item.key}
            data={friends}
            renderItem={({ item }) => {
                return < Text style={styles.textStyle}>{item.name}</Text>
            }} />
   )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;
