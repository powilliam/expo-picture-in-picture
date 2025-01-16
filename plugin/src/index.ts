import {
	AndroidConfig,
	type ConfigPlugin,
	withAndroidManifest,
} from "expo/config-plugins";

const withPictureInPictureEnabled: ConfigPlugin = (config) => {
	return withAndroidManifest(config, (config) => {
		const activity = AndroidConfig.Manifest.getMainActivityOrThrow(
			config.modResults,
		);

		activity.$["android:supportsPictureInPicture"] = "true";

		return config;
	});
};

export default withPictureInPictureEnabled;
