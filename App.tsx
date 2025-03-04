import { NavigationContainer, NavigationContainerRef, useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import RNFS from "react-native-fs";
// @ts-ignore
import AntDesign from "react-native-vector-icons/AntDesign";
// @ts-ignore
import Entypo from "react-native-vector-icons/Entypo";

// @ts-ignore
import Feather from "react-native-vector-icons/Feather";
// @ts-ignore
import EvilIcons from "react-native-vector-icons/EvilIcons";
// @ts-ignore
import FontAwesome from "react-native-vector-icons/FontAwesome";
// @ts-ignore
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// @ts-ignore
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// @ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";
// @ts-ignore
import Foundation from "react-native-vector-icons/Foundation";
import Navigator from './src/navigation/Navigator';
import { _NavgationRef } from '@navigation/NavigationService';
import BottomTabNavigator from '@navigation/BottomTabNavigator';
import { Alert, AppState, PermissionsAndroid, Platform } from 'react-native';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import BackgroundFetch from 'react-native-background-fetch';
// #region :: VECTOR ICON LOAD START's FROM HERE
void AntDesign.loadFont();
void Entypo.loadFont();
void Feather.loadFont();
void EvilIcons.loadFont();
void FontAwesome.loadFont();
void MaterialIcons.loadFont();
void MaterialCommunityIcons.loadFont();
void Ionicons.loadFont();
void Foundation.loadFont();
// #endregion :: VECTOR ICON LOAD END's FROM HERE

const App = (): React.JSX.Element => {

    return (
        <SafeAreaProvider >
            <NavigationContainer ref={_NavgationRef}>
                <Navigator />
            </NavigationContainer>
        </SafeAreaProvider>
    )
}
export default App;