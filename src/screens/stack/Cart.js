import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import * as Color from '../../styles/color';
import { blue } from '../../styles/color';
import _CartNavBar from '../../components/CartNavBar';
import _CartItem from '../../components/CartItem';
import _CartInvoice from '../../components/CartInvoice';
import _ButtonLarge from '../../components/ButtonLarge';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import _Text from '../../components/Text';
import { UpdatedCartedAction } from '../../redux/cartList/actions';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { _screenTheme } from '../../styles/themes';

const Cart = ({ ...props }) => {
  const { route } = props;
  const bgc = _screenTheme.Cart.theme;
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  //

  //
  const sizePrice = { S: 200, M: 350, L: 420, XL: 500, XXL: 650, '3XL': 800 };
  //
  const couponValue = {
    QWERTY: 50,
    AZERTY: 99,
    POIUYT: 234,
    MNBVCX: 53,
    JKLMNO: 94,
  };
  //
  const [couponState, setCouponState] = useState({
    coupon: '',
    couponDiscount: 0,
  });
  //
  const data = useSelector((state) => state);
  const { cartList, productList } = data;
  const cartedFunc = () => {
    let arr = [];
    for (let i = 0; i < productList.length; i++) {
      for (let j = 0; j < cartList.length; j++) {
        if (productList[i].id === cartList[j].id) {
          arr.push(productList[i]);
        }
      }
    }
    return arr;
  };
  const subTotalFunc = () => {
    let subT = 0;
    for (let i = 0; i < productList.length; i++) {
      for (let j = 0; j < cartList.length; j++) {
        if (productList[i].id === cartList[j].id) {
          // if (productList[i].discountPrice) {
          subT =
            subT +
            (productList[i].discountPrice
              ? productList[i].discountPrice * cartList[j].quantity +
                sizePrice[`${cartList[j].size}`]
              : productList[i].price * cartList[j].quantity +
                sizePrice[`${cartList[j].size}`]);
        }
      }
    }
    return subT;
  };
  //
  const couponDiscount = (value) => {
    setCouponState({
      ...couponState,
      coupon: value,
      couponDiscount: couponValue[value] ?? 0,
    });
  };
  //
  const totalPayable = () => {
    return subTotalFunc() + couponState.couponDiscount;
  };
  //
  const [state, setState] = useState([...cartList]);
  useEffect(() => setState([...cartList]), []);
  //
  const dispatch = useDispatch();
  const updateItem = (itemID, itemData) => {
    const data = state.map((item) =>
      item.id === itemID ? { ...itemData } : item,
    );
    setState(data);
    dispatch(UpdatedCartedAction(data));
    console.log('the the the...', state);
  };
  //
  const orderData = {
    id: 100,
    cartList: cartList,
    // subTotal: subTotalFunc(),
    // couponDiscount: couponDiscount(),
    cartTotalPayable: totalPayable(),
    totalPayable: totalPayable(),
  };
  //
  const navigation = useNavigation();
  return (
    <Container style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent={true}
      />
      <_CartNavBar
        screenTitle={'CART'}
        backgroundColor={bgc}
        leftIconName={'chevron-thin-left'}
        leftIconType={'entypo'}
        currentStep={1}
        totalStep={3}
      />
      <Content
        styles={styles.content}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        horizontal={false}
      >
        {cartedFunc().map((item, index) => (
          <_CartItem
            key={index}
            totalItems={cartedFunc()}
            itemName={item.name}
            itemDiscount={item.discounted}
            itemID={item.id}
            itemImage={item.images[1].source}
            itemPrice={item.price}
            itemColors={item.colors}
            itemDiscountPrice={item.discountPrice}
            itemSizes={item.sizes}
            itemCartInfo={item.cartInfo}
            updateItem={updateItem}
          />
        ))}
        {cartList.length === 0 && (
          <View style={{ padding: 30 }}>
            <_Text
              text={'Sorry! No item has been added to the cart yet'}
              fontSize={30}
              textStyle={'italic'}
              color={'red'}
            />
          </View>
        )}
      </Content>
      {cartList.length > 0 && (
        <_CartInvoice
          // bagDiscount={25}
          // bigTotal={200}\
          enterCoupon={couponDiscount}
          couponCode={couponState.coupon}
          couponDiscount={couponState.couponDiscount}
          // delivery={1000}
          subTotal={subTotalFunc()}
          totalPayable={totalPayable()}
        />
      )}
      {cartList.length > 0 && (
        <_ButtonLarge
          text={'PLACE ORDER'}
          bodyStyle={{ backgroundColor: bgc, marginTop: RFValue(10) }}
          onPress={() => {
            navigation.navigate('Address', { ...orderData });
          }}
        />
      )}

      {/*<_SearchBtn />*/}
    </Container>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, backgroundColor: '#fff' },
});
