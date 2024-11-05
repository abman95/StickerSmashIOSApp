import { Tabs } from "expo-router";
import  { Ionicons } from "@expo/vector-icons";
import {getHeaderTitle} from "@react-navigation/elements";
import {StatusBar} from "expo-status-bar";

export default function TabsLayout() {
    return (
        <>
        <StatusBar style="auto"></StatusBar>
        <Tabs
            screenOptions={{
                ...tabStyleColors,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerTitle: "Sticker Smash",
                    ...headerStyles,
                    ...tabStylesHome,
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    headerTitle: "About Sticker Smash",
                    ...headerStyles,
                    ...tabStylesAbout,
                }}
            />
        </Tabs>
        </>
    );
}


const tabStyleColors = {
    tabBarStyle: {
        backgroundColor: 'black',
    },
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: 'rgb(105, 105, 105)',
};

const tabStylesHome = {
    tabBarIcon: ({ focused, color }) => (
        <Ionicons
            name={focused ? "home-sharp" : "home-outline"}
            size={30}
            color={"white"}
        />
    ),
}

const tabStylesAbout = {
    tabBarIcon: ({ focused, color }) => (
        <Ionicons
            name={focused ? "information-circle" : "information-circle-outline"}
            size={30}
            color={"white"}
        />
    ),
}

const headerStyles = {
    headerStyle: {
        backgroundColor: 'black'
    },
    headerTitleStyle: {
        fontSize: 18,
        color: 'white'
    },
    headerTitleAlign: 'center'
};