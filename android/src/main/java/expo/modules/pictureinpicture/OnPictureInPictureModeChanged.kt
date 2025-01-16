package expo.modules.pictureinpicture

import androidx.core.util.Consumer
import androidx.core.app.PictureInPictureModeChangedInfo

class OnPictureInPictureModeChanged(
    private val callback: (PictureInPictureModeChangedInfo) -> Unit
) : Consumer<PictureInPictureModeChangedInfo> {
    override fun accept(data: PictureInPictureModeChangedInfo) = callback(data)
}
