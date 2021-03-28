import React, { useEffect, useState } from 'react';
import { StyleSheet, View, StatusBar, ScrollView, Button } from 'react-native';
import { blue } from '../../styles/color';
import _CartNavBar from '../../components/CartNavBar';
import _WishList from '../../components/WishList';
import { useNavigation } from '@react-navigation/native';
import _Drawer from '../../components/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import _Text from '../../components/Text';
import _ButtonLarge from '../../components/ButtonLarge';
import { removeAsync } from '../../redux/constants';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { _screenTheme } from '../../styles/themes';

const WhishList = ({ ...props }) => {
  const { route } = props;
  const bgc = _screenTheme.WishList.theme;
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  //
  const [state, setState] = useState({
    tab: 0,
    openDrawer: false,
    openDrawerIcon: 'menu-unfold',
    cartList: [],
    wishList: [],
  });

  const navigation = useNavigation();
  //
  const dispatch = useDispatch();
  const stated = useSelector((state) => state);
  const { bio, cartList, productList, wishList } = stated;
  //
  const wishedFunc = () => {
    let arr = [];
    for (let i = 0; i < productList.length; i++) {
      for (let j = 0; j < wishList.length; j++) {
        if (productList[i].id === wishList[j]) {
          arr.push(productList[i]);
        }
      }
    }
    return arr;
  };
  //
  //
  function arrFunc(arrCars, arrCols, keys) {
    let newArrs = [];
    for (let i in arrCars) {
      for (let j in arrCols) {
        // if (arrCars[i][`${keys}`] === arrCols[j][`${keys}`]) {
        if (arrCars[i].id === arrCols[j]) {
          newArrs.push({
            ...arrCars[i],
            carted: true,
          });
        }
      }
    }
    return newArrs;
  }
  //
  function wishListFunc(arrCars, arrCols) {
    let newArrs = [];
    for (let i in arrCols) {
      newArrs = arrCars.map((item) =>
        // item.id !== arrCols[i].id ? item : { ...item, carted: true },
        item.id !== arrCols[i]
          ? item
          : {
              ...item,
              carted: true,
            },
      );
    }
    return newArrs;
  }

  //
  useEffect(() => {
    setState({
      ...state,
      cartList: arrFunc(productList, cartList, 'id'),
    });
    React.memo(
      setState({
        ...state,
        wishList: wishListFunc(productList, cartList),
      }),
    );
  }, [cartList]);
  //
  return (
    <>
      <Container style={styles.container}>
        <StatusBar backgroundColor={bgc} barStyle={'light-content'} />
        <_CartNavBar
          screenTitle={'WISHLIST'}
          backgroundColor={bgc}
          leftIconName={'chevron-thin-left'}
          leftIconType={'entypo'}
        />
        {/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/}
        <Content>
          <View>
            {wishList.length !== 0 ? (
              <_WishList data={wishedFunc()} />
            ) : (
              <View style={{ padding: RFValue(30) }}>
                <_Text
                  text={'Sorry! No item has been added to the wishlist yet'}
                  fontSize={20}
                  textStyle={'italic'}
                  color={'red'}
                />
              </View>
            )}
          </View>
        </Content>
        <_ButtonLarge
          text={'CLEAR LIST'}
          textColor={'#aaa'}
          bodyStyle={{
            backgroundColor: bgc,
          }}
          // onPress={() => console.log(wishedFunc(), wishList, cartList)}
          // onPress={() => removeAsync('persist:uShop')}
        />

        {/*<_SearchBtn />*/}
      </Container>
    </>
  );
};

export default WhishList;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  navTitle: {},
  navTitleView: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    opacity: 0,
    backgroundColor: 'red',
  },
});
