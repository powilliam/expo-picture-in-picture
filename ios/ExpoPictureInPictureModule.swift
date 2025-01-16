import ExpoModulesCore

public class ExpoPictureInPictureModule: Module {
    public func definition() -> ModuleDefinition {
        Name("ExpoPictureInPicture")

        Events("onPictureInPictureModeChanged")

        Function("isPictureInPictureModeSupported") {
            return false
        }

        Function("isInPictureInPictureMode") {
            return false
        }

        Function("enterPictureInPictureMode") {}
    }
}
