import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import normzer from '../utils/normalizer';
import _Text from './Text';
import ModalSelector from 'react-native-modal-selector';
import { wearColor, wearSize } from '../api/wearsList';
import { blue } from '../styles/color';
import * as Color from '../styles/color';
import { Icon } from 'native-base';

import moment from 'moment';
import { TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

const _OrdersItem = ({ number, date, time, amount, ...props }) => {
  const navigation = useNavigation();
  //
  return (
    <TouchableRipple
      rippleColor={'#aaa'}
      onPress={() => navigation.navigate('OrderDetail')}
      borderless={false}
      style={{
        ...styles.itemContainer,
      }}
    >
      <>
        {/* Order Number */}
        <View style={styles.container}>
          <View style={styles.leftContent}>
            <Icon name={'tag'} type={'FontAwesome'} style={styles.leftIcon} />
            <_Text
              text={'Order No.: '}
              color={'#000'}
              styles={styles.leftText}
            />
          </View>
          <_Text text={'1234567890'} styles={styles.rightText} />
        </View>
        {/* Order Date */}
        <View style={styles.container}>
          <View style={styles.leftContent}>
            <Icon
              name={'calendar'}
              type={'MaterialCommunityIcons'}
              style={styles.leftIcon}
            />
            <_Text
              text={'Order Date: '}
              color={'#000'}
              styles={styles.leftText}
            />
          </View>
          <_Text text={moment().format('ddd, ll')} styles={styles.rightText} />
        </View>
        {/* Order Time */}
        <View style={styles.container}>
          <View style={styles.leftContent}>
            <Icon
              name={'clock'}
              type={'MaterialCommunityIcons'}
              style={styles.leftIcon}
            />
            <_Text
              text={'Order Time: '}
              color={'#000'}
              styles={styles.leftText}
            />
          </View>
          <_Text text={moment().format('hh:mm a')} styles={styles.rightText} />
        </View>
        {/* Order Amount */}
        <View style={styles.container}>
          <View style={styles.leftContent}>
            <Icon
              name={'cash'}
              type={'MaterialCommunityIcons'}
              style={styles.leftIcon}
            />
            <_Text
              text={'Order Amount: '}
              color={'#000'}
              styles={styles.leftText}
            />
          </View>
          <_Text text={'1,234'} styles={styles.rightText} />
        </View>
      </>
    </TouchableRipple>
  );
};

export default _OrdersItem;

const styles = StyleSheet.create({
  itemContainer: {
    // flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: RFValue(10),
    paddingHorizontal: RFValue(15),
    paddingBottom: RFValue(0),
    marginTop: RFValue(10),
    marginBottom: RFValue(10),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: RFValue(10),
  },
  leftContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftIcon: { color: '#d32f2f', fontSize: RFValue(15) },
  leftText: { paddingHorizontal: RFValue(10), fontSize: RFValue(15) },
  rightText: {
    color: '#000',
    fontSize: RFValue(15),
    fontFamily: 'Lato-Bold',
  },
});
