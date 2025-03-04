import { NavigationContainer, useFocusEffect, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from 'react'
import NavigationRoute from './NavigationRoute';
import RouteName from './RouteName';
const {
  BOTTOM_TAB_STACKS,
  APP_STACKS,
} = NavigationRoute;

const ContainerStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const defaultScreenOptions = {
  headerShown: false,
  unmountOnBlur: false,
  swipeEnabled: true,
};

const tabScreenOptions = {
  ...defaultScreenOptions,
  tabBarStyle: {
    backgroundColor: '#FFFFFFCC',
    height: 100,
    justifyContent: "center",
    alignItems: 'center',
    paddingVertical: 20,
  }
};

const Navigator = () => {
  const navigation = useNavigation();
  const renderScreens = (Navigator: any, stackList: any, optionsKey = 'options') => (
    (stackList || []).map((routeInfo: any, index: number) => (
      <Navigator.Screen
        key={`Screen-key-${index}-${routeInfo.id}`}
        name={routeInfo.screen_name}
        component={routeInfo.component}
        options={routeInfo[optionsKey]}


      />
    ))
  );

  const TabHandler = () => {
    return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#211C29",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          // height: 70,
          position: "absolute",
        },
      }}
        initialRouteName={RouteName.Watch}
      >
        {renderScreens(Tab, BOTTOM_TAB_STACKS, 'bottomOptions')}
      </Tab.Navigator>
    );
  };
  const AppStackHandler = () => {
    return (
      <Stack.Navigator screenOptions={defaultScreenOptions}>
        {renderScreens(Stack, APP_STACKS)}
      </Stack.Navigator>
    );
  };
  const RootStackHandler = () => {
    // Determine login and role status
    if (true) {
      return (
        <Stack.Navigator screenOptions={defaultScreenOptions} >
          <Stack.Screen
            name="Main"
            component={TabHandler}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AppStack"
            component={AppStackHandler}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      );
    }
  };
  return (
    <ContainerStack.Navigator screenOptions={defaultScreenOptions}>
      <ContainerStack.Screen name="INIT_APP" component={RootStackHandler} />
    </ContainerStack.Navigator>
  )
}

export default Navigator
