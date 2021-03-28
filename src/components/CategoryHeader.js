import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import MySwiper from './HeroSwiper';
import { homeSwiperImage, menSwiperImage } from '../api/images';
import { blue } from '../styles/color';
import normzer from '../utils/normalizer';
import MyText from './Text';
import _Text from './Text';
import * as pColor from 'react-native-paper/src/styles/colors';
import { Icon } from 'react-native-elements';
import CategoryBanner from './CategoryBanner';
import { RFValue } from 'react-native-responsive-fontsize';

const _CategoryHeader = ({ contentList, title, subtitle, overlayColor }) => {
  return (
    <
      // style={{
      //   width: responsiveScreenWidth(100),
      //   position: 'absolute',
      //   top: 0,
      //   // height: animatedHH,
      //   flex: 0,
      //   backgroundColor: 'white',
      // }}
    >
      <MySwiper contentList={contentList} height={250}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: overlayColor + '50',
            height: RFValue(250),
          }}
        />
        <View
          style={{
            marginVertical: RFValue(10),
            marginBottom: RFValue(20),
            position: 'absolute',
            paddingHorizontal: RFValue(20),
            top: RFValue(90),
          }}
        >
          <MyText text={title} textStyle={'bold'} fontSize={40} />
          <MyText textStyle={'italic'} text={subtitle} fontSize={15} />
        </View>
      </MySwiper>
    </>
  );
};

export default _CategoryHeader;

const styles = StyleSheet.create({});
