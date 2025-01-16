import ExpoPictureInPictureModule from "./ExpoPictureInPictureModule";

export function isPictureInPictureModeSupported() {
	return ExpoPictureInPictureModule.isPictureInPictureModeSupported();
}

export function isInPictureInPictureMode() {
	return ExpoPictureInPictureModule.isInPictureInPictureMode();
}

export function enterInPictureInPictureMode() {
	ExpoPictureInPictureModule.enterPictureInPictureMode();
}
