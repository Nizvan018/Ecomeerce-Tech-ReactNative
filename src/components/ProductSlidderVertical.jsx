import React from 'react'
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';

export const ProductSlidderVertical = ({ slidderTitle, DATA }) => {
    return (
        <>
            <FlatList data={ DATA } ListHeaderComponent={<Text style={styles.categorieTitle}>{slidderTitle}</Text>} keyExtractor={item => item.id} numColumns={2} contentContainerStyle={styles.contentContainer}
            renderItem={({ item }) => (
                <View style={styles.cardProduct}>
                    <Image source={{ uri: item.data.url_imagen }} style={styles.image}/>
                    <Text numberOfLines={1} style={styles.productName}>{item.data.nombre}</Text>
                    <Text>{item.data.precio} MXN</Text>
                    <Text>Stock: {item.data.cantidad}</Text>
                </View>
            )}/>
        </>
    )
}

const styles = StyleSheet.create({
    categorieView: {
        width: '100%',
        marginTop: 20
    },
    categorieTitle: {
        width: '100%',
        fontSize: 32,
        fontWeight: 600,
        paddingLeft: 10,
    },
    cardProduct: {
        padding: 12,
        marginVertical: 6,
        marginHorizontal: 6,
        borderRadius: 8,
        backgroundColor: 'white'
    },
    image: {
        height: 120,
        width: 150,
        backgroundColor: 'black'
    },
    productName: {
        marginTop: 6,
        maxWidth: 150,
        fontSize: 16,
        fontWeight: 600,
        flexWrap: 'nowrap'
    },
    contentContainer: {
        flexDirection: 'column',
        paddingHorizontal: 10
    }
});