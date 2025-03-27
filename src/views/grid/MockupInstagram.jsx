import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Icon, Image } from '@rneui/base'
import React from 'react'

export default function MockupInstagram(props) {
    const { backgroundColor, size1, size2, size3 } = props;
  return (
    <View style={{ flexDirection: 'row', marginHorizontal: 8, backgroundColor: backgroundColor }}>
        <Avatar size={size1} rounded source={{uri: "https://randomuser.me/api/portraits/men/35.jpg"}} containerStyle={styles.avatar}/>
        <Avatar size={size2} rounded title='EM' containerStyle={styles.avatar}/>
        <Avatar size={size3} rounded title='AR' containerStyle={styles.avatar}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    avatar: {
        marginHorizontal: 8,
        backgroundColor: 'red',
    },
})