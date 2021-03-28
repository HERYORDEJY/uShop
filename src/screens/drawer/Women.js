import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { Text, Icon } from 'react-native-elements';
import {
  responsiveFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { menSwiperImage, womenSwiperImage } from '../../api/images';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import { menWearCategory } from '../../api/wearsList';
import _CategoryHeader from '../../components/CategoryHeader';
import normzer from '../../utils/normalizer';
import * as COLOR from '../../styles/color';
import _Text from '../../components/Text';
import { DrawerActions } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Content } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import _SearchBtn from '../../components/SearchBtn';
import { _screenTheme } from '../../styles/themes';

const Women = ({ navigation, ...props }) => {
  const { route } = props;
  const bgc = _screenTheme.Women.theme;

  return (
    <Container>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent={true}
      />
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: bgc + '50',
        }}
      />
      <_CategoryHeader
        contentList={womenSwiperImage}
        title={'23% off'}
        subtitle={'247 New Items'}
        overlayColor={bgc}
      />
      <Content
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{
          paddingBottom: RFValue(30),
          marginHorizontal: RFValue(30),
        }}
      >
        {menWearCategory.map((m, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: bgc,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: RFValue(10),
              paddingHorizontal: RFValue(10),
              borderWidth: 1,
              borderColor: bgc,
              elevation: 1,
              marginVertical: RFValue(10),
            }}
            // onPress={() =>
            //   navigation.navigate(`${m.name}`, { themeColor: bgc })
            // }
          >
            <_Text text={m.name} fontSize={RFValue(15)} color={'#fff'} />

            <Icon
              name={'chevron-thin-right'}
              type={'entypo'}
              size={RFValue(20)}
              color={'#fff'}
            />
          </TouchableOpacity>
        ))}
      </Content>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          elevation: 20000,
          flex: 0,
          width: '100%',
        }}
      >
        <NavBar
          translucent={true}
          screenTitle={'WOMEN'}
          bellValue={11}
          cartValue={9}
          navigation={navigation}
          drawerScreen={true}
        />
      </View>
      <_SearchBtn backdropColor={bgc} />
    </Container>
  );
};

export default Women;

const styles = StyleSheet.create({
  wrapper: { position: 'relative', height: 350, elevation: 2 },
  slide1: {
    flex: 1,
    width: responsiveScreenWidth(100),
    height: 300,
  },
});
