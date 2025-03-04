import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, FlatList, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import DashboardLogic from './DashboardLogic'
import Header from '@components/organisms/Header'
import { appColors } from '@theme/colors'


const { width } = Dimensions.get('window');


const DashboardScreen = () => {

  DashboardLogic()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 1)", overflow: 'hidden', }}>
      <Header title={'Dashboard'}
        titleStyle={{ color: appColors.Standardblack }}
      />


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  movieContainer: {
    width: width - 40,
    height: 180,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: "center",
    overflow: "hidden",
  },
  movieImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  labelContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    justifyContent: 'center',

    // paddingHorizontal: 5,
    // paddingVertical:10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20

  },
  movieTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    // alignSelf:'center'

  },
})

export default DashboardScreen
