import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import MySwiper from './HeroSwiper';
import { homeSwiperImage } from '../api/images';
import { blue } from '../styles/color';
import normzer from '../utils/normalizer';
import MyText from './Text';
import _Text from './Text';
import * as pColor from 'react-native-paper/src/styles/colors';
import { Icon } from 'react-native-elements';
import CategoryBanner from './CategoryBanner';

import { RFValue } from 'react-native-responsive-fontsize';

const _HomeHeader = () => {
  return (
    <View
    // style={styles.container}
    >
      <MySwiper contentList={homeSwiperImage} height={250}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: blue + '99',
            height: RFValue(300),
          }}
        />
        <View style={styles.wrapper}>
          <View style={styles.topWrapper}>
            <MyText
              text={'NEW\nARRIVALS'}
              textStyle={'bold'}
              fontSize={RFValue(20)}
            />
            <MyText
              textStyle={'italic'}
              text={'200+ New Items'}
              fontSize={RFValue(15)}
            />
          </View>
          <View style={styles.bottomWrapper}>
            <TouchableOpacity style={styles.shopItWrapper}>
              <_Text text={'Shop it '} color={pColor.lightGreen300} />
              <Icon
                name={'keyboard-backspace'}
                type={'material'}
                color={pColor.lightGreen300}
                style={{ transform: [{ rotate: '180deg' }] }}
              />
            </TouchableOpacity>
          </View>
          {/* I dont think this is really neccessay */}
          {/* <CategoryBanner /> */}
        </View>
      </MySwiper>
    </View>
  );
};

export default _HomeHeader;

const styles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(100),
    position: 'absolute',
    top: 0,
    // height: animatedHH,
    flex: 0,
    backgroundColor: blue,
  },
  wrapper: {
    flex: 0,
    position: 'relative',
    top: RFValue(-170),
    paddingHorizontal: RFValue(20),
  },
  topWrapper: {
    marginVertical: RFValue(10),
    marginBottom: RFValue(20),
  },
  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: RFValue(20),
    left: 0,
    right: 0,
  },
  shopItWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
