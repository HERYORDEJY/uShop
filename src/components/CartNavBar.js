import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import * as pColor from 'react-native-paper/src/styles/colors';
import MyText from './Text';
import { normalizer } from '../utils/fontSetup';
import normzer from '../utils/normalizer';
import _Text from './Text';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RFValue } from 'react-native-responsive-fontsize';

const _CartNavBar = ({
  leftIconName,
  leftIconType,
  leftIconStyle,
  leftIconColor = '#fff',
  rightIconName,
  rightIconType,
  rightIconColor = '#fff',
  rightIconStyle,
  rightIconName2,
  rightIconType2,
  rightIconColor2 = '#fff',
  rightIconStyle2,
  rightIconName3,
  rightIconType3,
  rightIconColor3 = '#fff',
  rightIconStyle3,
  screenTitle,
  backgroundColor,
  subtitle,
  bodyStyles,
  currentStep,
  totalStep,
  // cartValue,
  // cartValue2,
  rightMenu = true,
  openDrawer,
  menuIconName,
}) => {
  const [data, setData] = useState({ mIcon: false });
  const menuIcon = () => {
    setData({ ...data, mIcon: !data.mIcon });
  };
  const navigation = useNavigation();
  const state = useSelector((state) => state);
  const { cartList } = state;
  const _cartValue = cartList.length;
  return (
    <>
      <View
        style={{
          ...styles.container,
          backgroundColor: backgroundColor,
          ...bodyStyles,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 0,
            marginLeft: 0,
          }}
        >
          {leftIconName && (
            <TouchableOpacity
              style={{
                paddingLeft: 0,
                marginLeft: 0,
              }}
              onPress={() =>
                leftIconName === 'chevron-thin-left'
                  ? navigation.goBack()
                  : openDrawer()
              }
            >
              <Icon
                name={leftIconName}
                type={leftIconType}
                color={leftIconColor}
                size={RFValue(20)}
                style={{
                  paddingLeft: 0,
                  marginLeft: 0,
                  marginRight: RFValue(20),
                  ...leftIconStyle,
                }}
              />
            </TouchableOpacity>
          )}
          <View style={{}}>
            {screenTitle && (
              <MyText
                text={screenTitle}
                styles={styles.screenTitle}
                fontSize={20}
              />
            )}

            {subtitle && <MyText text={subtitle} />}
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: RFValue(20),
            alignItems: 'center',
          }}
        >
          {rightIconName && (
            <TouchableOpacity
              style={{
                paddingLeft: 0,
                marginLeft: 0,
                paddingHorizontal: RFValue(20),
                marginRight: RFValue(10),
              }}
            >
              <Icon
                name={rightIconName}
                type={rightIconType}
                color={rightIconColor}
                size={RFValue(20)}
                style={{
                  paddingLeft: 0,
                  marginLeft: 0,
                  // marginRight: 15,
                  ...rightIconStyle,
                }}
              />
              {/*{_cartValue && (*/}
              {rightIconName !== 'phone' && (
                <Badge
                  badgeStyle={{
                    backgroundColor: pColor.lightGreen600,
                    position: 'absolute',
                    left: normzer(15),
                    top: normzer(-30),
                    borderWidth: 0,
                  }}
                  // status={'success'}
                  value={_cartValue}
                  textStyle={{ fontSize: RFValue(13) }}
                />
              )}
              {/*)}*/}
            </TouchableOpacity>
          )}
          {rightIconName2 && (
            <TouchableOpacity
              style={{
                paddingLeft: 0,
                paddingHorizontal: 15,
                marginHorizontal: 10,
                marginLeft: 15,
              }}
              onPress={() => navigation.navigate('Cart')}
            >
              <Icon
                name={rightIconName2}
                type={rightIconType2}
                color={rightIconColor2}
                size={RFValue(30)}
                style={{
                  paddingLeft: 0,
                  marginLeft: 0,
                  // marginRight: 15,
                  ...rightIconStyle2,
                }}
              />
              {/*{_cartValue && (*/}
              {rightIconName2 !== 'mail' && (
                <Badge
                  badgeStyle={{
                    backgroundColor: pColor.lightGreen600,
                    position: 'absolute',
                    left: normzer(15),
                    top: normzer(-30),
                    borderWidth: 0,
                  }}
                  // status={'success'}
                  value={_cartValue}
                  textStyle={{ fontSize: RFValue(13) }}
                />
              )}
              {/*)}*/}
            </TouchableOpacity>
          )}
          {rightIconName3 && (
            <TouchableOpacity
              style={{
                paddingleft: 15,
                marginleft: 10,
              }}
            >
              <Icon
                name={rightIconName3}
                type={rightIconType3}
                color={rightIconColor3}
                size={RFValue(30)}
                style={{
                  paddingLeft: 0,
                  marginLeft: 0,
                  // marginRight: 15,
                  ...rightIconStyle3,
                }}
              />
            </TouchableOpacity>
          )}
          {totalStep && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <_Text text={'Step:'} styles={{ marginRight: RFValue(20) }} />
              <_Text text={currentStep} fontSize={30} />
              <_Text text={'/'} />
              <_Text text={totalStep} />
            </View>
          )}
          {/* {rightMenu && (
            <TouchableOpacity
              style={{ paddingLeft: 10 }}
              onPress={() => {
                openDrawer();
                menuIcon();
              }}
            >
              <Icon
                name={menuIconName}
                type={'antdesign'}
                color={rightIconColor}
                ssize={RFValue(25)}
              />
            </TouchableOpacity>
          )} */}
        </View>
      </View>
    </>
  );
};

export default _CartNavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(10),
    paddingTop: RFValue(40),
    backgroundColor: 'transparent',
    elevation: 1000,
  },

  screenTitle: { textTransform: 'uppercase' },
});
