import { Dimensions } from 'react-native';
import ImageResizer from 'react-native-image-resizer';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
  'window',
);

export const _imageResizer = (
  imageUri,
  newWidth,
  newHeight,
  compressFormat,
  quality,
  rotation,
  outputPath,
) => {
  ImageResizer.createResizedImage(
    imageUri,
    newWidth,
    newHeight,
    compressFormat,
    quality,
    rotation,
    outputPath,
  )
    .then(({ uri }) => {
      // response.uri is the URI of the new image that can now be displayed, uploaded...
      // response.path is the path of the new image
      // response.name is the name of the new image with the extension
      // response.size is the size of the new image
      return uri;
    })
    .catch((err) => {
      console.log(
        'Oops, something went wrong. Check that the filename is correct and\n' +
          ' inspect err to get more details. ....\n \n',
        err,
      );
      // Oops, something went wrong. Check that the filename is correct and
      // inspect err to get more details.
    });
};
