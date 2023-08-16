import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../Views/SplashScreen";
import ChatListScreen from "../Views/ChatListScreen";
import ChatScreen from "../Views/ChatScreen";
import AuthScreen from "../Views/AuthScreen";
import ProfileScreen from "../Views/ProfileScreen";
import NewMessages from "../Views/NewMessages";
import ThemeScreen from "../Views/ThemeScreen";
import NewGroup from "../Views/NewGroup";

// screens

const Stack = createNativeStackNavigator();

function StackNavigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name='SplashScreen' component={SplashScreen} />
				<Stack.Screen name='AuthScreen' component={AuthScreen} />
				<Stack.Screen name='ChatList' component={ChatListScreen} />
				<Stack.Screen name='ChatScreen' component={ChatScreen} />
				<Stack.Screen name='ProfileScreen' component={ProfileScreen} />
				<Stack.Screen name='NewMsg' component={NewMessages} />
				<Stack.Screen name='ThemeScreen' component={ThemeScreen} />
				<Stack.Screen name='NewGroup' component={NewGroup} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default StackNavigation;
