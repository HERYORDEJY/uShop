import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Dimensions, View, Text } from 'react-native';
import normzer from '../utils/normalizer';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import ImageResizer from 'react-native-image-resizer';
// import { _imageResizer } from '../utils/imageResizer';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
  'window',
);

const _OfferBanner = () => {
  const [state, setState] = useState({ urlImage: '' });
  //
  const _imageResizer = (
    imageUri = '../assets/images/offer-banner.png',
    newWidth = 300,
    newHeight = 300,
    compressFormat = 'JPG',
    quality = 100,
    rotation = 0,
    // outputPath,
  ) => {
    ImageResizer.createResizedImage(
      imageUri,
      newWidth,
      newHeight,
      compressFormat,
      quality,
      rotation,
      // outputPath,
    )
      .then(({ path }) => {
        // response.uri is the URI of the new image that can now be displayed, uploaded...
        // response.path is the path of the new image
        // response.name is the name of the new image with the extension
        // response.size is the size of the new image
        setState({ ...state, urlImage: path });
        console.log('.....\n \n \n ....', path);
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
  //

  useEffect(
    // () =>
    //   setState({
    //     ...state,
    //     uri: _imageResizer(
    //       require('../assets/images/offer-banner.png'),
    //       SCREEN_WIDTH,
    //       normzer(300),
    //       'JPG',
    //       100,
    //     ),
    //   }),
    _imageResizer(),
    [state],
  );
  return (
    <View style={styles.container}>
      {/*{state.uri ? (*/}
      {/*  <Image*/}
      {/*    // source={require(state.urlImage)}*/}
      {/*    // style={{ width: null, height: normzer(300) }}*/}
      {/*    resizeMode={'contain'}*/}
      {/*  />*/}
      {/*) : (*/}
      {/*  <Text>INVALID</Text>*/}
      {/*)}*/}
    </View>
  );
};

export default _OfferBanner;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
