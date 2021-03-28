import { Dimensions, Platform, PixelRatio } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
  'window',
);

//based on iPhone 8's scale
const width_scale: number = SCREEN_WIDTH / 375;
const height_scale: number = SCREEN_HEIGHT / 667;

export default function normzer(
  size: number,
  based: 'width' | 'height' = 'width',
) {
  const newSize = based === 'height' ? size * height_scale : size * width_scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
