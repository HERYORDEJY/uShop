import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import { Icon } from 'native-base';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import * as COLOR from '../styles/color';
import normzer from '../utils/normalizer';
import _Text from './Text';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import _DoubleTap from './DoubleTap';
import * as Animatable from 'react-native-animatable';
import {
  AddCartAction,
  AddWishAction,
  RemoveCartAction,
  RemoveWishAction,
} from '../redux/wishList/actions';
import { RFValue } from 'react-native-responsive-fontsize';

export default function _ProductItem({
  itemID,
  wishedBy,
  itemName,
  source,
  title,
  itemPrice,
  itemDiscounted,
  itemDiscountPrice,
  extraStyles,
}) {
  const navigation = useNavigation();
  //
  const percentDiscount = itemDiscountPrice
    ? 100 - Math.ceil((itemDiscountPrice * 100) / itemPrice)
    : 0;
  //
  const dispatch = useDispatch();
  const stated = useSelector((state) => state);
  const { wishList, productList } = stated;
  //
  const wishedInfo = () => {
    for (let i in wishList) {
      if (wishList[i].id === itemID) {
        return true;
      }
    }
  };
  //
  //
  const [wishInfo, setWishInfo] = useState({
    id: itemID,
    wishes: 32,
  });
  //
  const addWish = () => {
    dispatch(AddWishAction(wishList, { ...wishInfo }));
  };
  //
  const removeWish = () => {
    dispatch(RemoveWishAction(wishList, itemID));
  };
  //

  const doubleTap = () => {
    // dispatch(UpdatedProductAction(itemID, { wished: true }));
    new Alert(alert('This is the double tap...'));
  };
  const singleTap = () => {
    navigation.navigate('ProductDescription', { itemID: itemID });
  };
  return (
    <>
      {/*<View style={{ ...styles.container, ...containerStyle }}>*/}
      {/*  <Image*/}
      {/*    style={{*/}
      {/*      width: '100%',*/}
      {/*      height: 190,*/}
      {/*      overflow: 'hidden',*/}
      {/*      borderRadius: 10,*/}
      {/*    }}*/}
      {/*    resizeMode={'cover'}*/}
      {/*    source={source}*/}
      {/*  />*/}
      {/*  <MyText*/}
      {/*    text={title}*/}
      {/*    textStyle={'bold'}*/}
      {/*    fontSize={titleSize}*/}
      {/*    color={'#000'}*/}
      {/*    styles={{ letterSpacing: 1, marginLeft: 5 }}*/}
      {/*  />*/}
      {/*  <MyText*/}
      {/*    text={subtitle}*/}
      {/*    fontSize={subtitleSize}*/}
      {/*    color={'#aaa'}*/}
      {/*    styles={{ letterSpacing: 1, marginLeft: 5 }}*/}
      {/*  />*/}
      {/*</View>*/}
      {/*//:::::::::::::::::::::::::::::::::::*/}
      <View style={{ ...styles.container, ...extraStyles }}>
        <_DoubleTap singleTap={singleTap} doubleTap={addWish} delay={200}>
          {wishedInfo() && (
            <View style={{ elevation: 100, position: 'absolute', margin: 10 }}>
              <Animatable.View animation={'bounceIn'}>
                <Icon
                  name={'heart'}
                  type={'FontAwesome'}
                  style={{ color: COLOR.red500 }}
                />
              </Animatable.View>
            </View>
          )}

          <Image
            style={{
              width: '100%',
              height: normzer(190),
              overflow: 'hidden',
            }}
            resizeMode={'cover'}
            source={source}
          />
          <View
            style={{
              // marginHorizontal: 10,
              borderTopWidth: 3,
              borderColor: COLOR._lightGreen,
              marginTop: RFValue(5),
              paddingTop: RFValue(5),
            }}
          >
            <_Text
              text={itemName || title}
              color={'#000'}
              styles={{ letterSpacing: 1 }}
              numberOfLines={1}
              fontSize={15}
              textStyle={'bold'}
            />
            {/*<View*/}
            {/*  style={{*/}
            {/*    flexDirection: 'row',*/}
            {/*    alignItems: 'baseline',*/}
            {/*    // borderBottomWidth: 3,*/}
            {/*    // borderColor: '#e23421',*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <_Text*/}
            {/*    text={`$${price || subtitle}`}*/}
            {/*    color={'#999'}*/}
            {/*    textStyle={'bold'}*/}
            {/*    styles={{ alignSelf: 'center' }}*/}
            {/*  />*/}
            {itemDiscountPrice ? (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <View>
                  <_Text
                    text={`$${itemDiscountPrice}`}
                    color={'#999'}
                    textStyle={'bold'}
                    styles={{ alignSelf: 'center' }}
                    fontSize={15}
                  />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                  <_Text
                    text={`$${itemPrice} `}
                    color={'#d32f2f'}
                    styles={{
                      marginLeft: 10,
                      alignSelf: 'center',
                      textDecorationLine: 'line-through',
                    }}
                    fontSize={10}
                  />
                  <_Text
                    text={`(${percentDiscount}% off)`}
                    color={'#d32f2f'}
                    styles={{
                      marginLeft: 5,
                      alignSelf: 'center',
                    }}
                    fontSize={15}
                  />
                </View>
              </View>
            ) : (
              <View>
                <_Text
                  text={`$${itemPrice}`}
                  color={'#999'}
                  textStyle={'bold'}
                  // styles={{ alignSelf: 'center' }}
                  fontSize={15}
                />
              </View>
            )}
            {/*</View>*/}
          </View>
        </_DoubleTap>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginRight: index === 0 ? 5 : 0,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: responsiveWidth(50),
    marginBottom: RFValue(10),
    backgroundColor: '#fff',
    flex: 1,
    paddingVertical: RFValue(5),
    paddingHorizontal: RFValue(5),
  },
});
