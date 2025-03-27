import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Card, Image, AirbnbRating } from "@rneui/base";
import React from 'react'

export default function ListHouses(props) {
    const { image, imageList, name, description, price, rating, count, navigation, direction } = props;
  return (
    <TouchableOpacity onPress={() => navigation.navigate('DetailPlaceStack', { place: { image, imageList, name, description, price, rating, count, direction }, })}>
        <Card>
            <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: image ? image : 'https://placehold.co/80x80.png' }} 
                style={{ width:80, height:80 }} 
                />
                <View style={{ flex:1, flexDirection: 'column', marginLeft: 8 }}>
                    <View style={{ flex:1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold' }}>{ name ? name : "Sin Nombre" }</Text>
                        <AirbnbRating 
                            count={5}
                            defaultRating={rating / count}
                            size={12}
                            showRating={false}
                            isDisabled={true}
                        />
                    </View>

                    <Text style={{ fontSize: 12 }}>
                        {description.length > 180 ?
                        description.substring(0, 100) + "..." :
                        description}
                    </Text>
                    <Text style={{ fontSize: 12, textAlign:'right', marginEnd: 10 }}>{ price ? `$${price}` : 'Precio no disponible' }</Text>
                </View>
            </View>
        </Card>
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({})