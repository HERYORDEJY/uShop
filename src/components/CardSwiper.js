import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { normalizer } from '../utils/fontSetup';
import { Icon } from 'native-base';
import normzer from '../utils/normalizer';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import _CreditCard from './_CreditCard';
import * as COLORS from '../styles/color';

export default function _CardSwiper({
  contentList,
  loop = true,
  showsButtons = false,
  showsPaginator = false,
  styleNew,
  resizeMode = 'cover',
  paginationStyle,
  paginationColor = { active: '#fff', nonActive: 'rgba(255, 255, 255, 0.4)' },
  iconSize,
  height = 200,
}) {
  const [swiper, setSwiper] = useState({
    index: 0,
  });
  return (
    <>
      <Swiper
        height={normzer(height)}
        loop={loop}
        style={{ ...styles.wrapper, height: normzer(height), ...styleNew }}
        showsButtons={showsButtons}
        showsPagination={false}
        onIndexChanged={(index) => setSwiper({ ...swiper, index: index })}
        containerStyle={{ flex: 0 }}
      >
        {contentList.map((card, index) => {
          return (
            <View
              key={index}
              style={{
                ...styles.slide1,
                height: normzer(height),
                marginHorizontal: 20,
                // paddingVertical: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {card.id && card.name && (
                <_CreditCard
                  cardType={card.type.slug}
                  name={card.name}
                  expiration={card.expiration}
                  number={card.number}
                  cvc={card.cvc}
                  flipped={false}
                  width={'100%'}
                  height={normzer(height)}
                  fontSize={22}
                />
              )}
            </View>
          );
        })}
      </Swiper>
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
              // color={
              //
              // }
              // color={}
              // size={normzer(20)}
              style={{
                ...styles.icon,
                marginHorizontal: 5,
                alignSelf: 'center',
                marginRight: index + 1 === contentList.length ? 0 : 5,
                color:
                  index === swiper.index
                    ? paginationColor.active
                    : paginationColor.nonActive,
                fontSize: index === swiper.index ? normzer(12) : normzer(9),
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
    // position: 'relative',
    // height: normzer(200),
    // width: '100%',
    // elevation: 2,
  },
  slide1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // width: '100%',
    // height: normzer(300),
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
    marginVertical: 10,
    paddingTop: 10,
  },
});
