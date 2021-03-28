import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { _lightGreen, blue, red500 } from '../styles/color';
import normzer from '../utils/normalizer';
import _Text from './Text';
import { normalizer } from '../utils/fontSetup';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { AddCartAction, RemoveCartAction } from '../redux/cartList/actions';
import { UpdatedProductAction } from '../redux/productList/actions';
import * as Animatable from 'react-native-animatable';
import * as COLOR from '../styles/color';

export default function _WishItem({
  itemID,
  wishedBy,
  wished,
  carted,
  item,
  itemName,
  itemLikes = wishedBy,
  price,
  source,
  title,
  itemPrice,
  itemDiscounted,
  itemDiscountPrice = false,
  itemColors,
  itemSizes,
}) {
  const percentDiscount = itemDiscountPrice
    ? 100 - Math.ceil((itemDiscountPrice * 100) / itemPrice)
    : 0;
  //
  const navigation = useNavigation();
  //
  const dispatch = useDispatch();
  const stated = useSelector((state) => state);
  const { wishList, cartList, productList } = stated;
  //
  const [cartInfo, setCartInfo] = useState({
    size: itemSizes[0].slug,
    color: itemColors[0].name,
    quantity: 1,
  });
  //
  const cartedInfo = () => {
    for (let i in cartList) {
      if (cartList[i].id === itemID) {
        return true;
      }
    }
  };
  //
  const addCart = () => {
    // const _cartList =
    dispatch(AddCartAction(cartList, { id: itemID, ...cartInfo }));
    dispatch(
      UpdatedProductAction(productList, itemID, {
        carted: true,
        cartInfo: { ...cartInfo },
      }),
    );
  };
  //
  const removeCart = () => {
    // const _cartList =
    dispatch(RemoveCartAction(cartList, itemID));
    dispatch(
      UpdatedProductAction(productList, itemID, {
        carted: false,
      }),
    );
  };
  ////

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
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.content}
          onPress={() =>
            navigation.navigate('ProductDescription', {
              itemName: itemName,
              itemPrice: itemPrice,
              itemDiscountPrice: itemDiscountPrice,
              itemColors: itemColors,
              itemLikes: itemLikes,
              itemSizes: itemSizes,
              wishedBy: wishedBy,
              wished: wished,
              carted: carted,
              item: item,
              itemID: itemID,
            })
          }
        >
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
              borderColor: _lightGreen,
              marginTop: 5,
              paddingTop: 5,
            }}
          >
            <_Text
              text={itemName || title}
              color={'#000'}
              styles={{ letterSpacing: 1 }}
              numberOfLines={1}
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
                    fontSize={22}
                  />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                  <_Text
                    text={`$${itemPrice} `}
                    color={COLOR.red500}
                    styles={{
                      marginLeft: 10,
                      alignSelf: 'center',
                      textDecorationLine: 'line-through',
                    }}
                    fontSize={17}
                  />
                  <_Text
                    text={`(${percentDiscount}% off)`}
                    color={COLOR.red500}
                    styles={{
                      marginLeft: 5,
                      alignSelf: 'center',
                    }}
                    fontSize={17}
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
                  fontSize={22}
                />
              </View>
            )}
            {/*</View>*/}
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // marginVertical: 10,
          }}
        >
          {cartedInfo() === true ? (
            <TouchableOpacity
              style={{ paddingVertical: 10, paddingHorizontal: 5 }}
              onPress={() => removeCart()}
              // onPress={() => removeAsync('uShop')}
            >
              <_Text
                text={'REMOVE CART'}
                color={_lightGreen}
                fontSize={17}
                textStyle={'bold'}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{ paddingVertical: 10, paddingHorizontal: 5 }}
              onPress={() => addCart()}
              // onPress={() => removeAsync('uShop')}
            >
              <_Text
                text={'ADD CART'}
                color={_lightGreen}
                fontSize={17}
                textStyle={'bold'}
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={{ paddingVertical: 10, paddingHorizontal: 5 }}
          >
            <Icon
              name={'trash'}
              type={'FontAwesome'}
              style={{ color: COLOR.red500 }}
              size={normalizer(25)}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginRight: index === 0 ? 5 : 0,
    marginRight: 10,

    width: responsiveWidth(50),
    height: normzer(300),
    marginBottom: 10,
    backgroundColor: '#fff',
    flex: 1,
    // paddingVertical: 10,
    // paddingHorizontal: 10,
  },
  content: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
  },
});
