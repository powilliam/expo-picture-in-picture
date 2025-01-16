import { useEvent } from "expo";
import { useEffect, useSyncExternalStore } from "react";
import { AppState } from "react-native";

import ExpoPictureInPictureModule from "./ExpoPictureInPictureModule";

function subscribeToAppState(callback: () => void) {
	const subscription = AppState.addEventListener("change", callback);
	return subscription.remove;
}

function appStateSnapshot() {
	return AppState.currentState;
}

export function useIsInPictureInPicture() {
	const onPictureInPictureModeChanged = useEvent(
		ExpoPictureInPictureModule,
		"onPictureInPictureModeChanged",
	);

	return onPictureInPictureModeChanged?.isInPictureInPictureMode ?? false;
}

export function useEnterPictureInPictureModeOnUserLeaveHint() {
	const appState = useSyncExternalStore(subscribeToAppState, appStateSnapshot);

	useEffect(() => {
		if (appState.match(/inactive|background/)) {
			ExpoPictureInPictureModule.enterPictureInPictureMode();
		}
	}, [appState]);
}
