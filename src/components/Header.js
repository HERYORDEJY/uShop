import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { Icon } from 'react-native-elements';

import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import MySwiper from './HeroSwiper';

export default function Header({
  swiperImageList,
  overlayColor,
  paginator,
  headerHeight,
  autoplay,
}) {
  const [swiper, setSwiper] = useState({
    index: 0,
  });
  return (
    <View style={{ backgroundColor: '#fff' }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: headerHeight,
        }}
      >
        <View
          style={{
            width: responsiveScreenWidth(100),
            flex: 1,
            backgroundColor: 'white',
          }}
        >
          <MySwiper autoplay={autoplay} contentList={swiperImageList} />
          {/*<Swiper*/}
          {/*  loop={true}*/}
          {/*  autoplay={autoplay}*/}
          {/*  style={styles.wrapper}*/}
          {/*  showsButtons={false}*/}
          {/*  showsPagination={false}*/}
          {/*  // onIndexChanged={(index) =>*/}
          {/*  //   setSwiper({*/}
          {/*  //     ...swiper,*/}
          {/*  //     index: index,*/}
          {/*  //   })*/}
          {/*  // }*/}
          {/*>*/}
          {/*  {swiperImageList.map((img, index) => (*/}
          {/*    <View key={index} style={styles.slide1}>*/}
          {/*      <Image source={img.source} style={{ width: null, flex: 1 }} />*/}
          {/*    </View>*/}
          {/*  ))}*/}
          {/*</Swiper>*/}
        </View>
        {/* //::::::::::End of Swiper */}
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: overlayColor,
          }}
        />
        {/* //:::::::Start of paginator */}
        {paginator && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // top: 90,
              right: 20,
              bottom: 90,
              position: 'absolute',
            }}
          >
            {swiperImageList.map((img, index) => (
              <Icon
                key={index}
                name={'circle'}
                type={'font-awesome'}
                color={
                  index === swiper.index ? '#fff' : 'rgba(255, 255, 255, 0.4)'
                }
                size={10}
                style={{
                  marginHorizontal: 5,
                  marginRight: index + 1 === swiperImageList.length ? 0 : 5,
                }}
              />
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { position: 'relative', height: 350, elevation: 2 },
  slide1: {
    flex: 1,
    width: responsiveScreenWidth(100),
    height: 300,
  },
});
