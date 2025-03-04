import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MediaLogic from './MediaLogic'


const MediaScreen = () => {
    MediaLogic()
    return (
        <View style={style.container}>
            <Text>Media Screen</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    background: { width: '100%', height: '100%', resizeMode: 'cover' },
})

export default MediaScreen
