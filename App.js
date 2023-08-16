import { StyleSheet, Text, View, StatusBar } from "react-native";
import StackNavigation from "./src/Navigation/StackNavigation";
import ChatListScreen from "./src/Views/ChatListScreen";
import ChatScreen from "./src/Views/ChatScreen";
export default function App() {
	return (
		<>
			<StatusBar />
			<StackNavigation />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
