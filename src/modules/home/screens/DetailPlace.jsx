import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { Image, AirbnbRating } from '@rneui/base';
import React, { useLayoutEffect } from 'react'
import PagerView from 'react-native-pager-view';
import { map } from 'lodash';
import MapViewer from '../../../kernel/components/MapViewer';
import MapViewerLocation from '../../../kernel/components/MapViewerLocation';

export default function DetailPlace(props) {
    const { navigation, route } = props;
    const { place } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({ title: place.name });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <ScrollView>
                <PagerView style={styles.pagerView} initialPage={0}>
                    {map(place.imageList, (image, index) => (
                        <View style={styles.page} key={index}>
                            <Image source={{ uri: image }} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
                        </View>
                    ))}
                </PagerView>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginVertical: 8}}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{ place.name }</Text>
                    <AirbnbRating 
                        count={5}
                        defaultRating={place.rating / place.count}
                        size={12}
                        showRating={false}
                        isDisabled={true}
                    />
                </View>
                <Text style={{ color: 'gray', margin: 16 }}>{ place.description }</Text>
                <MapViewer direction={place.direction} latitudeDelta={0.005} longitudeDelta={0.005} width='80%' height={320} name={place.name} description={place.description}/>
                <View style={{marginVertical: 16}}>
                    <MapViewerLocation/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    page: {
        width: '100%',
        height: 256,
    },
    pagerView:{
        height: 256,
    }
})