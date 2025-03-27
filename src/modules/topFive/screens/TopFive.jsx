import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TopFive() {
  return (
    <View style={styles.container}>
      <Text>Top 5</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})