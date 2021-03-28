// !TODO Shared Transition

import React, { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import { _lightGreen, blue } from '../../styles/color';
import _Text from '../../components/Text';
import NavBar from '../../components/NavBar';
import _Swiper from '../../components/HeroSwiper';
import { productDescription } from '../../api/images';
import normzer from '../../utils/normalizer';
import _SearchBtn from '../../components/SearchBtn';
import { Container, Content, Icon, Input } from 'native-base';
import * as Color from '../../styles/color';
import _ButtonLarge from '../../components/ButtonLarge';
import _Drawer from '../../components/Drawer';
import {
  useNavigation,
  useFocusEffect,
  useNavigationState,
} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { AddCartAction, RemoveCartAction } from '../../redux/cartList/actions';
import { UpdatedProductAction } from '../../redux/productList/actions';
import { AddWishAction } from '../../redux/wishList/actions';
import { RFValue } from 'react-native-responsive-fontsize';
import { _screenTheme } from '../../styles/themes';

export default function ProductDetails(props) {
  //
  const { route } = props;
  const bgc = _screenTheme.ProductDescription.theme;
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  let { params } = route;
  let { itemID } = params;
  //
  const [state, setState] = useState({
    size: '',
    color: '',
    quantity: 1,
    like: false,
    carted: undefined,
    openDrawer: false,
    openDrawerIcon: 'menu-unfold',
  });
  //

  const navigation = useNavigation();
  //
  const dispatch = useDispatch();
  const stated = useSelector((state) => state);
  const { bio, cartList, productList } = stated;
  //
  const cartedInfo = () => {
    for (let i in cartList) {
      if (cartList[i].id === itemID) {
        return true;
      }
    }
  };
  //
  function cartedFunc() {
    let arr = productList.filter((item) => item.id === itemID);
    return arr;
  }
  const percentDiscount = cartedFunc()[0].discountPrice
    ? 100 -
      Math.ceil((cartedFunc()[0].discountPrice * 100) / cartedFunc()[0].price)
    : 0;
  //
  const [cartInfo, setCartInfo] = useState({
    id: itemID,
    size: undefined,
    color: undefined,
    quantity: 1,
    price: cartedFunc()[0].price,
    discountPrice: cartedFunc()[0].discountPrice ?? 0,
    percentDiscount: percentDiscount,
  });

  const addCartTruthy =
    cartInfo.quantity === 0 ||
    cartInfo.size === undefined ||
    cartInfo.color === undefined;
  //
  const addCart = () => {
    dispatch(AddCartAction(cartList, { ...cartInfo }));
  };
  //
  const removeCart = () => {
    dispatch(RemoveCartAction(cartList, itemID));
  };
  //
  const addWish = () => {
    dispatch(AddWishAction(cartList, itemID));
    dispatch(
      UpdatedProductAction(productList, itemID, {
        wished: true,
      }),
    );
  };
  //
  const removeWish = () => {
    // const _cartList =
    dispatch(AddWishAction(cartList, itemID));
    dispatch(
      UpdatedProductAction(productList, itemID, {
        wished: false,
      }),
    );
  };
  //
  return (
    <Container>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent={true}
      />
      <View style={styles.container}>
        <_Swiper
          contentList={cartedFunc()[0].images}
          autoplay={false}
          showsPaginator={true}
          paginationStyle={{ position: 'relative', top: RFValue(-20) }}
          paginationColor={{ active: blue, nonActive: `${blue}87` }}
          overlayColor={bgc}
        />
        <Content
          showsVerticalScrollIndicator={false}
          bouncesZoom={false}
          bounces={false}
          scrollEventThrottle={16}
          style={{ flex: 1 }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              paddingHorizontal: RFValue(20),
              paddingVertical: RFValue(10),
              borderBottomWidth: 1,
              borderColor: '#ddd',
              marginBottom: RFValue(10),
            }}
          >
            <View
              style={{
                // paddingRight: 20
                flex: 0.8,
              }}
            >
              <_Text text={cartedFunc()[0].name} color={'#000'} fontSize={20} />

              {cartedFunc()[0].discountPrice ? (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <View>
                    <_Text
                      text={`$${cartedFunc()[0].discountPrice}`}
                      color={'#999'}
                      textStyle={'bold'}
                      styles={{ alignSelf: 'center' }}
                      fontSize={20}
                    />
                  </View>

                  <View
                    style={{ flexDirection: 'row', alignItems: 'baseline' }}
                  >
                    <_Text
                      text={`$${cartedFunc()[0].price} `}
                      color={'#d32f2f'}
                      styles={{
                        marginLeft: RFValue(10),
                        alignSelf: 'center',
                        textDecorationLine: 'line-through',
                      }}
                      fontSize={20}
                    />
                    <_Text
                      text={`(${percentDiscount}% off)`}
                      color={'#d32f2f'}
                      styles={{
                        marginLeft: RFValue(5),
                        alignSelf: 'center',
                      }}
                      fontSize={15}
                    />
                  </View>
                </View>
              ) : (
                <View>
                  <_Text
                    text={`$${cartedFunc()[0].price}`}
                    color={'#999'}
                    textStyle={'bold'}
                    // styles={{ alignSelf: 'center' }}
                    fontSize={20}
                  />
                </View>
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'baseline',
              }}
            >
              <TouchableOpacity
                style={{
                  padding: RFValue(10),
                  // paddingHorizontal: 15,
                  alignItems: 'center',
                  paddingTop: 0,
                }}
                onPress={() => setState({ ...state, like: !state.like })}
              >
                <Icon
                  name={'heart'}
                  type={'FontAwesome'}
                  style={{
                    color: state.like ? Color.red700 : '#ddd',
                    fontSize: RFValue(20),
                  }}
                />
                <_Text
                  text={`${cartedFunc()[0].wishedBy} Likes`}
                  color={'#999'}
                  fontSize={15}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: RFValue(20),
              paddingVertical: RFValue(10),
              paddingTop: RFValue(10),
              borderBottomWidth: 1,
              borderColor: '#ddd',
              marginBottom: RFValue(10),
            }}
          >
            <View style={{ marginBottom: RFValue(10) }}>
              <_Text text={'Size'} color={'#000'} fontSize={20} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                // justifyContent: 'space-between',
              }}
            >
              {cartedFunc()[0].sizes.map((s, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setCartInfo({ ...cartInfo, size: s.slug })}
                  style={{
                    backgroundColor:
                      cartInfo.size === s.slug ? Color.blue : '#eee',
                    borderRadius: 1000,
                    width: RFValue(30),
                    height: RFValue(30),
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 20,
                  }}
                >
                  <_Text
                    text={s.slug}
                    color={cartInfo.size === s.slug ? '#fff' : '#999'}
                    fontSize={15}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: RFValue(20),
              paddingVertical: RFValue(20),
              paddingTop: 10,
              borderBottomWidth: 1,
              borderColor: '#ddd',
              marginBottom: 10,
            }}
          >
            <View style={{ marginBottom: 10 }}>
              <_Text text={'Color'} color={'#000'} fontSize={20} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'space-between',
              }}
            >
              {cartedFunc()[0].colors.map((c, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    setCartInfo({ ...cartInfo, color: c.name.toLowerCase() })
                  }
                  style={{
                    // backgroundColor:
                    //   cartInfo.color === c.name.toLowerCase()
                    //     ? Color.blue100
                    //     : '#fff',
                    // padding: RFValue(5),
                    marginRight: RFValue(20),
                    // borderRadius: 1000,
                    borderColor:
                      cartInfo.color === c.name.toLowerCase()
                        ? c.name.toLowerCase()
                        : null,
                    borderWidth:
                      cartInfo.color === c.name.toLowerCase() ? 2 : 0,
                    width:
                      cartInfo.color === c.name.toLowerCase()
                        ? RFValue(30)
                        : RFValue(30),
                    height:
                      cartInfo.color === c.name.toLowerCase()
                        ? RFValue(30)
                        : RFValue(30),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon
                    name={'circle'}
                    type={'FontAwesome'}
                    style={{
                      color: c.name.toLowerCase(),
                      fontSize:
                        cartInfo.color === c.name.toLowerCase()
                          ? RFValue(30)
                          : RFValue(20),
                    }}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: RFValue(20),
              paddingVertical: RFValue(10),
              paddingTop: RFValue(10),
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}
          >
            <View style={{ marginBottom: RFValue(10) }}>
              <_Text text={'Quantity'} color={'#000'} fontSize={20} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: cartInfo.quantity <= 0 ? '#eee' : '#bbb',
                  padding: RFValue(5),
                  paddingHorizontal: RFValue(5),
                }}
                onPress={() => {
                  setCartInfo({
                    ...cartInfo,
                    quantity: parseInt(cartInfo.quantity, 10) - 1,
                  });
                }}
                disabled={cartInfo.quantity <= 0}
              >
                <Icon
                  name={'minus'}
                  type={'MaterialCommunityIcons'}
                  style={{ fontSize: RFValue(20) }}
                />
              </TouchableOpacity>
              <View style={{}}>
                <_Text
                  text={`${cartInfo.quantity}`}
                  color={blue}
                  fontSize={20}
                  styles={{
                    // padding: 20,
                    // borderWidth: 1,
                    // borderColor: '#ddd',
                    paddingVertical: RFValue(10),
                    marginHorizontal: RFValue(10),
                  }}
                />
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#bbb',
                  padding: RFValue(5),
                  paddingHorizontal: RFValue(5),
                }}
                onPress={() => {
                  setCartInfo({
                    ...cartInfo,
                    quantity: parseInt(cartInfo.quantity, 10) + 1,
                  });
                  console.log(cartInfo.quantity);
                }}
              >
                <Icon
                  name={'plus'}
                  type={'MaterialCommunityIcons'}
                  style={{ fontSize: RFValue(20) }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </View>
      {cartedInfo() ? (
        <_ButtonLarge
          text={'REMOVE FROM CART'}
          textColor={'#aaa'}
          bodyStyle={{
            backgroundColor: bgc,
            // margin: RFValue(20),
          }}
          onPress={() => removeCart()}
        />
      ) : (
        <_ButtonLarge
          text={'ADD TO CART'}
          textColor={'#aaa'}
          bodyStyle={{
            backgroundColor: bgc,
            // margin: RFValue(20),
          }}
          onPress={() => addCart()}
        />
      )}
      <_SearchBtn themeColor={bgc} />
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          elevation: 200,
          flex: 0,
          width: '100%',
        }}
      >
        <NavBar
          // screenTitle={'KIDS'}
          bellValue={11}
          cartValue={9}
          navigation={navigation}
          drawerScreen={true}
          translucent={true}
          // backgroundColor={bgc}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});
