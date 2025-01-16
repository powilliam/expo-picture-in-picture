package expo.modules.pictureinpicture

import com.facebook.react.ReactActivity
import androidx.core.os.bundleOf
import android.content.pm.PackageManager
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoPictureInPictureModule : Module() {
    private val activity
        get() = appContext.throwingActivity as ReactActivity

    private val onPictureInPictureModeChanged = OnPictureInPictureModeChanged { info ->
        val bundle = bundleOf("isInPictureInPictureMode" to info.isInPictureInPictureMode)
        this@ExpoPictureInPictureModule.sendEvent("onPictureInPictureModeChanged", bundle)
    }

    override fun definition() = ModuleDefinition {
        Name("ExpoPictureInPicture")

        Events("onPictureInPictureModeChanged")

        OnStartObserving {
            activity.addOnPictureInPictureModeChangedListener(onPictureInPictureModeChanged)
        }

        OnStopObserving {
            activity.removeOnPictureInPictureModeChangedListener(onPictureInPictureModeChanged)
        }

        Function("isPictureInPictureModeSupported") {
            activity.packageManager.hasSystemFeature(PackageManager.FEATURE_PICTURE_IN_PICTURE)
        }

        Function("isInPictureInPictureMode") {
            activity.isInPictureInPictureMode
        }

        Function("enterPictureInPictureMode") {
            activity.enterPictureInPictureMode()
        }
    }
}
