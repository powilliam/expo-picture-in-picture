type OnPictureInPictureModeChanged = {
	isInPictureInPictureMode: boolean;
};

export type ExpoPictureInPictureModuleEvents = {
	onPictureInPictureModeChanged(event: OnPictureInPictureModeChanged): void;
};
