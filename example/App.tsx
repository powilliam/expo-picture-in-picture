import {
	enterInPictureInPictureMode,
	isPictureInPictureModeSupported,
	useEnterPictureInPictureModeOnUserLeaveHint,
	useIsInPictureInPicture,
} from "expo-picture-in-picture";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
	const isInPictureInPicture = useIsInPictureInPicture();

	useEnterPictureInPictureModeOnUserLeaveHint();

	if (isInPictureInPicture) {
		return (
			<View style={styles.view}>
				<Text>Picture in Picture</Text>
			</View>
		);
	}

	return (
		<SafeAreaView style={styles.view}>
			{!isPictureInPictureModeSupported() ? (
				<Text>This device doesnt support Picture In Picture</Text>
			) : (
				<Button
					title="Enter Picture in Picture"
					onPress={enterInPictureInPictureMode}
				/>
			)}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		gap: 16,
		alignItems: "center",
		justifyContent: "center",
	},
});
