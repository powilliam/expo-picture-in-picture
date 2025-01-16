import { NativeModule, requireNativeModule } from "expo";

import type { ExpoPictureInPictureModuleEvents } from "./ExpoPictureInPicture.types";

declare class ExpoPictureInPictureModule extends NativeModule<ExpoPictureInPictureModuleEvents> {
	isPictureInPictureModeSupported(): boolean;
	isInPictureInPictureMode(): boolean;
	enterPictureInPictureMode(): void;
}

export default requireNativeModule<ExpoPictureInPictureModule>(
	"ExpoPictureInPicture",
);
