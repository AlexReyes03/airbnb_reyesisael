import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from 'react'
import {Overlay} from "@rneui/base";

export default function Loading(props) {
    const {title, color, size, isVisible}= props
    return(
        <Overlay isVisible={isVisible} overlayStyle={styles.container}>
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <ActivityIndicator size={size} color={color}/>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Overlay>
    );
}
const styles = StyleSheet.create({
    container: {
        height:300,
        width:'80%',
        borderRadius:16,
        backgroundColor:'white',
        borderColor:'#E4E5E8',
        borderWidth:2
    },
    title:{
        color:'black',
        fontWeight:'bold',
        fontSize:16
    }

})