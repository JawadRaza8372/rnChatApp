import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { inActiveColor, mainColor, opWhite, secColor } from "../AppColors";
const ChatRoomItem = ({ name, lastmsg }) => {
	name = name && name.length > 0 ? name : "User Name";
	lastmsg =
		lastmsg && lastmsg.length > 0
			? lastmsg
			: "Your last message will be here so please";
	return (
		<View style={styles.roomItmdiv}>
			<View style={styles.avtrContainer}>
				<Image
					source={{
						uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					}}
					style={styles.avtrImg}
				/>
			</View>
			<View style={styles.txtContainer}>
				<Text style={styles.title}>
					{name.length > 17 ? name.substring(0, 17) + "..." : name}
				</Text>
				<Text style={styles.lastmsgtxt}>
					{lastmsg.length > 40 ? lastmsg.substring(0, 17) + "..." : lastmsg}
				</Text>
			</View>
		</View>
	);
};

export default ChatRoomItem;

const styles = StyleSheet.create({
	title: {
		fontSize: h("2.7%"),
		color: mainColor,
		fontWeight: "bold",
		textTransform: "capitalize",
	},
	lastmsgtxt: {
		color: inActiveColor,
		fontWeight: "bold",
		textTransform: "capitalize",
	},
	roomItmdiv: {
		width: "98%",
		height: h("10%"),
		alignSelf: "center",
		marginBottom: h("1%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: secColor,
		flexDirection: "row",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		elevation: 3,
	},
	txtContainer: {
		width: "75%",
		height: "100%",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
		flexDirection: "column",
	},
	avtrContainer: {
		width: "25%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},

	avtrImg: {
		width: w("17.5%"),
		height: w("17.5%"),
		borderWidth: 2,
		borderColor: mainColor,
		borderRadius: w("20%"),
		overflow: "hidden",
		resizeMode: "cover",
	},
});
