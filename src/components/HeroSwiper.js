import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { Icon } from 'native-base';

import { RFValue } from 'react-native-responsive-fontsize';

export default function _Swiper({
  contentList,
  loop = true,
  autoplay = true,
  showsButtons = false,
  showsPaginator = false,
  styleNew,
  resizeMode = 'cover',
  paginationStyle,
  paginationColor = { active: '#fff', nonActive: 'rgba(255, 255, 255, 0.4)' },
  iconSize,
  height = 300,
  children,
  overlayColor,
}) {
  const [swiper, setSwiper] = useState({
    index: 0,
  });
  return (
    <>
      <Swiper
        height={RFValue(height)}
        loop={loop}
        autoplay={autoplay}
        style={{ ...styles.wrapper, height: RFValue(height), ...styleNew }}
        showsButtons={showsButtons}
        showsPagination={false}
        onIndexChanged={(index) => setSwiper({ ...swiper, index: index })}
        containerStyle={{ flex: 0 }}
      >
        {contentList.map((img, index) => (
          <>
            <View
              key={index}
              style={{ ...styles.slide1, height: RFValue(height) }}
            >
              <Image
                source={img.source}
                style={{ width: '100%', height: '100%' }}
                resizeMode={resizeMode}
              />
            </View>
            {overlayColor && (
              <View
                style={{
                  ...StyleSheet.absoluteFillObject,
                  backgroundColor: overlayColor + '50',
                }}
              />
            )}
          </>
        ))}
      </Swiper>

      {children}
      {showsPaginator && (
        <View
          style={{
            ...styles.paginationStyle,
            ...paginationStyle,
          }}
        >
          {contentList.map((img, index) => (
            <Icon
              key={index}
              name={'circle'}
              type={'FontAwesome'}
              style={{
                ...styles.icon,
                marginHorizontal: 5,
                marginRight: index + 1 === contentList.length ? 0 : 5,
                color:
                  index === swiper.index
                    ? paginationColor.active
                    : paginationColor.nonActive,
                fontSize: index === swiper.index ? RFValue(10) : RFValue(5),
              }}
            />
          ))}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    // height: RFValue(300),
    // width: '100%',
    // elevation: 2,
  },
  slide1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    // height: RFValue(300),
    // height: normalizer(300),
  },
  // slide2: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  paginationStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    position: 'relative',
  },
});
