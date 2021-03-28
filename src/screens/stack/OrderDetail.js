import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { _lightGreen, blue } from '../../styles/color';
import _CartNavBar from '../../components/CartNavBar';
import _Text from '../../components/Text';
import _OrderItem from '../../components/OrderItem';
import _ButtonLarge from '../../components/ButtonLarge';
import { useNavigation } from '@react-navigation/native';
import _Drawer from '../../components/Drawer';
import _OrdersItem from '../../components/OrdersItem';
import _NavBar from '../../components/NavBar';
import { Container, Content } from 'native-base';
import { _screenTheme } from '../../styles/themes';

const OrderDetail = ({ ...props }) => {
  const { route } = props;
const bgc = _screenTheme.OrderDetail.theme;  //

  const [state, setState] = useState({
    openDrawer: false,
    openDrawerIcon: 'menu-unfold',
    // closeDrawerIcon: 'menu-unfold',
  });
  const navigation = useNavigation();

  return (
    <Container style={styles.container}>
      <_NavBar
        screenTitle={'ORDER DETAIL'}
        backgroundColor={bgc}
        stackScreen={true}
        bellValue={11}
        cartValue={9}
        navigation={navigation}
      />
      <Content
        style={{ paddingTop: 20 }}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        horizontal={false}
      >
        <View style={{ paddingBottom: 50 }}>
          <View style={{ paddingHorizontal: 20, paddingBottom: 5 }}>
            <_Text
              text={`Order No: ${'1122334455'}`}
              color={'#000'}
              styles={{ textAlign: 'left' }}
              fontSize={19}
            />
          </View>
          <View style={{ marginVertical: 5 }}>
            <_OrderItem
              itemSize={'M'}
              itemQuantity={4}
              itemPrice={88}
              itemImage={require('../../assets/images/shirt-men-01.png')}
              itemDiscounted={true}
              itemName={'Global T Shirt'}
              itemDiscountPrice={30}
              itemColor={'red'}
            />
          </View>
          <View style={{ marginVertical: 5 }}>
            <_OrderItem
              itemSize={'XXL'}
              itemQuantity={100}
              itemPrice={100}
              itemImage={require('../../assets/images/shirt-men-03.png')}
              itemDiscounted={true}
              itemName={'Fendi Urban Wear'}
              itemDiscountPrice={40}
              itemColor={'lightblue'}
            />
          </View>
        </View>
      </Content>
      <View
        style={{
          position: 'relative',
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('Track')}
          style={{ paddingHorizontal: 20, alignItems: 'center' }}
        >
          <_Text
            text={`Track Order No: ${'1122334455'}`}
            fontSize={15}
            textStyle={'bold'}
            color={_lightGreen}
            styles={{
              textAlign: 'center',
              textDecorationLine: 'underline',
            }}
          />
        </TouchableOpacity>
        <_ButtonLarge
          text={'CANCEL ORDER'}
          textColor={'#aaa'}
          bodyStyle={{
            backgroundColor: bgc,
            margin: 20,
          }}
          onPress={() => {}}
        />
      </View>

      {/*<_SearchBtn />*/}
    </Container>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});
