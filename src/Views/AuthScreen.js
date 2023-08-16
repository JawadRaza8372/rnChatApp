import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { mainColor, secColor } from "../AppColors";
import CustomTextInput from "../Components/CustomTextInput";
import CustomAuthBtn from "../Components/CustomAuthBtn";
import { w, h } from "react-native-responsiveness";
import CustomPasswordInput from "../Components/CustomPasswordInput";
const AuthScreen = ({ navigation }) => {
	const [uitemplt, setuitemplt] = useState(false);
	const [signUpform, setsignUpform] = useState({
		phone: "",
		password: "",
		nickname: "",
	});
	const [loginForm, setloginForm] = useState({ phone: "", password: "" });
	return (
		<SafeAreaView style={styles.fillmybg}>
			{uitemplt ? (
				<>
					<View style={styles.createForm}>
						<Text style={styles.mylable}>Create Account</Text>
						<CustomTextInput
							label={"Phone"}
							value={signUpform.phone}
							onChangeFunct={(text) =>
								setsignUpform({ ...signUpform, phone: text })
							}
						/>
						<CustomTextInput
							label={"Nick Name"}
							value={signUpform.nickname}
							onChangeFunct={(text) =>
								setsignUpform({ ...signUpform, nickname: text })
							}
						/>
						<CustomPasswordInput
							label={"Password"}
							value={signUpform.password}
							onChangeFunct={(text) =>
								setsignUpform({ ...signUpform, password: text })
							}
						/>
						<CustomAuthBtn
							title={"SignUp"}
							onClickfun={() => {
								alert("signup");
								navigation.navigate("ChatList");
							}}
						/>
					</View>
				</>
			) : (
				<>
					<View style={styles.loginForm}>
						<Text style={styles.mylable}>Login</Text>
						<CustomTextInput
							label={"Phone"}
							value={loginForm.phone}
							onChangeFunct={(text) =>
								setloginForm({ ...loginForm, phone: text })
							}
						/>
						<CustomPasswordInput
							label={"Password"}
							value={loginForm.password}
							onChangeFunct={(text) =>
								setloginForm({ ...loginForm, password: text })
							}
						/>
						<CustomAuthBtn
							title={"Login"}
							onClickfun={() => {
								alert("login");
								navigation.navigate("ChatList");
							}}
						/>
					</View>
				</>
			)}

			<TouchableOpacity onPress={() => setuitemplt(!uitemplt)}>
				<Text style={styles.switchtxt}>
					{uitemplt
						? "Already have an account! Login"
						: "Don't have an account?SignUp"}
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default AuthScreen;

const styles = StyleSheet.create({
	fillmybg: {
		width: "100%",
		height: "100%",
		backgroundColor: mainColor,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	loginForm: {
		width: "100%",
		height: h("50%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "column",
	},
	createForm: {
		width: "100%",
		height: h("60%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "column",
	},
	mylable: {
		fontSize: h("4%"),
		fontWeight: "bold",
		color: secColor,
	},
	switchtxt: {
		fontSize: h("1.9%"),
		color: secColor,
	},
});
