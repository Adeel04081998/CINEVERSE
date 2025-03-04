import React from "react";
import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import RouteName from "./RouteName";
import svgs from "@assets/svgs";
import DashboardScreen from "@screens/TabStackScreen/Dashboard/DashboardScreen";
import WatchScreen from "@screens/TabStackScreen/Watch/WatchScreen";
import MediaScreen from "@screens/TabStackScreen/Media/MediaScreen";
import MoreScreen from "@screens/TabStackScreen/More/MoreScreen";
import SearchCategoriesScreen from "@screens/AppStackScreen/SearchCategories/SearchCategoriesScreen";
import MovieDetailScreen from "@screens/AppStackScreen/MovieDetailScreen/MovieDetailScreen";

const activeText = "#FFFFFF"
const inActiveText = "#7D7586"
const tabBarLabelStyle = {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 10,
}
const APP_ROUTES = {
    'SearchCategories': {
        screen_name: RouteName.SearchCategoriesScreen,
        component: SearchCategoriesScreen,
        options: undefined,
    },
    "MovieDetailScreen": {
        screen_name: RouteName.MovieDetailScreen,
        component: MovieDetailScreen,
        options: undefined,
    }
}
const BOTTOM_TAB_ROUTES = {
    'DashboardScreen': {
        screen_name: RouteName.Dashboard,
        component: DashboardScreen,
        bottomOptions: {
            tabBarLabelStyle: tabBarLabelStyle,
            // tabBarIconStyle: navStyles.tabBarIconStyle,
            tabBarIcon: ({ color, focused }) => {
                return <View>
                    <SvgXml xml={svgs.DashboardDotsTab(color, focused)} />
                </View>
            },
            tabBarActiveTintColor: activeText,
            tabBarInactiveTintColor: inActiveText
        },
    },
    'WatchScreen': {
        screen_name: RouteName.Watch,
        component: WatchScreen,
        bottomOptions: {
            tabBarIcon: ({ color, focused }) => {
                return <View>
                    <SvgXml xml={svgs.WatchTab(color, focused)} />
                </View>
            },
            tabBarLabelStyle: tabBarLabelStyle,
            tabBarActiveTintColor: activeText,
            tabBarInactiveTintColor: inActiveText
        },
    },
    'MediaScreen': {
        screen_name: RouteName.MediaLibrary,
        component: MediaScreen,
        bottomOptions: {
            tabBarIcon: ({ color, focused }) => {
                return <View>
                    <SvgXml xml={svgs.MediaTab(color, focused)} />
                </View>
            },
            tabBarLabelStyle: tabBarLabelStyle,
            tabBarActiveTintColor: activeText,
            tabBarInactiveTintColor: inActiveText
        },
    },
    'MoreScreen': {
        screen_name: RouteName.More,
        component: MoreScreen,
        bottomOptions: {
            tabBarIcon: ({ color, focused }) => {
                return <View>
                    <SvgXml xml={svgs.MoreTab(color, focused)} />
                </View>
            },
            tabBarLabelStyle: tabBarLabelStyle,
            tabBarActiveTintColor: activeText,
            tabBarInactiveTintColor: inActiveText
        },
    },
}
const APP_STACKS = Object.keys(APP_ROUTES).map((key, index) => ({
    id: `init-${index}-${key}`,
    screen_name: APP_ROUTES[key].screen_name,
    component: APP_ROUTES[key].component
}))
const BOTTOM_TAB_STACKS = Object.keys(BOTTOM_TAB_ROUTES).map((key, index) => ({
    id: `init-${index}-${key}`,
    screen_name: BOTTOM_TAB_ROUTES[key].screen_name,
    component: BOTTOM_TAB_ROUTES[key].component,
    bottomOptions: BOTTOM_TAB_ROUTES[key].bottomOptions,
}))
export default {
    APP_ROUTES,
    APP_STACKS,
    BOTTOM_TAB_ROUTES,
    BOTTOM_TAB_STACKS,

}
